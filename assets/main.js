(function () {

  var socket = io.connect("http://localhost:8080"); //Socket Connection
  var log_section = document.getElementById("logs"); //Log Container

  // This will occur when the server sends the changedlogs event
  socket.on("changedlogs", function(data){
    if(data) {
      var logstrings = "";
      var log_length = data.data.length;

      // Updating DOM
      for(var i = 0; i < log_length; i++) {
        logstrings += "<div>" + data.data[i] + "</div>";
      }

      log_section.innerHTML +=  logstrings;
    }
  });

})();