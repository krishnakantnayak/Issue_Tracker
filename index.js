const express=require('express');
const app=express();
var bodyParser = require('body-parser')
const port = 8000;
const mongoose=require('./config/mongoose');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes/index'));
app.use(express.static('assets'));

app.listen(port,(err)=>{
    if(err)console.log(err,'is the error');
});
