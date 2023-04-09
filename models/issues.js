/*Schema model for Issues which will use Project ID as a field to map with respective projects*/
const mongoose=require('mongoose');

const issueSchema=new mongoose.Schema({
    ProjectID:{
        type:String,
        required:true
    },
    Title:{
        type:String,
    },
    Description:{
        type:String,
    },
    Author:{
        type:String,
    },
    Labels:{
        type:Array,
    }
})

const Issue=mongoose.model('Issue',issueSchema);

module.exports=Issue;
