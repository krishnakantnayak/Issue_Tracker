const mongoose=require('mongoose');

const projectSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Label:{
        type:Array
    }
});

const Project=mongoose.model('Project',projectSchema);

module.exports=Project;