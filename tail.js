var express = require("express")
var fs = require("fs");
// var backwardsStream = require('fs-backwards-stream')
// const readLastLines = require('read-last-lines');

var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);



// SOCKET CONNECTION FOR EMITTING CHANGES
io.on("connection", function(client) {
  console.log("Client connected.. ");
  var logFile = process.argv[2]; //LOG FILE THAT NEED TO BE MONITORED


  // Reading log file
  function sendLogsToClient() {

    var fileContent = fs.readFileSync(logFile).toString();
    var last_read_position = fileContent.length;

    // Manipulating filecontent
    var contentArr = fileContent.split("\n")
    var linesToSend = contentArr.slice((contentArr.length-10), (contentArr.length+1));

    // var linesToSend = fileContent.slice(-10);

    makeChanges(linesToSend);

    // Watch for changes
    fs.watch(logFile, function(event, filename) 
    {
      // Open file in read mode
      fs.open(logFile, "r", function(err, fd) 
      {
        // Get stas of the file to see how much content has been changed, Then read that particular data only
        fs.fstat(fd, function(err, fstats)
        {
          var difference = fstats.size - last_read_position;
          // Checking if file has changed

          if(difference) 
          {
            var buffer = new Buffer.alloc(difference);
            
            fs.read(fd, buffer, 0, buffer.length, last_read_position, function (err, bytes)
            {
              if(bytes > 0) 
              {
                changedContent = buffer.slice(0, bytes).toString();
                makeChanges(changedContent.split("\n"));
              }
            });

          }
          last_read_position = fstats.size
        })
      });
    });
  }

  sendLogsToClient()


  function makeChanges(logs) {
    if(logs.length) 
    { 
      //Check if there is any lines to send
      client.emit("changedlogs", {data: logs});
    }
  }
});


app.use("/js", express.static(__dirname + '/assets'));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
})


// Serve listening on this port
server.listen(8080); 