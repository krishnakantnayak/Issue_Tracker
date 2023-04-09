const mongoose=require('mongoose');
/*DB configuration*/
mongoose.connect('mongodb://127.0.0.1:27017/projects_list_db');
const db=mongoose.connection;

db.on('error',console.error.bind(console.log('error connrcting to db')));
db.once('open',function(){
    console.log('sucessfully connected to db');
})
