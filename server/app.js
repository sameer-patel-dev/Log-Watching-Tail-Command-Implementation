const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const {MONGOURI} = require('./keys');

mongoose.connect(MONGOURI, {
    useUnifiedTopology:true,
    useNewUrlParser:true
})
mongoose.connection.on('connected', () =>{
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', () =>{
    console.log(' Not Connected to MongoDB', err);
});

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

app.listen(PORT, ()=>{
    console.log("Server running at port", PORT)
})