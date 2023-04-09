const Project=require('../models/project');

module.exports.createProject=async function(req,res){
    await Project.create({
        Name:req.body.name,
        Description:req.body.description,
        Author:req.body.author
    })
    res.redirect('/');
}