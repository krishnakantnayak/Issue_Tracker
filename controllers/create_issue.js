const Issue=require('../models/issues');
const Project=require('../models/project');

module.exports.createIssue=async function(req,res){
    // let pID=req.query.id;
    console.log(req.body);
    console.log('we got hit here');
    await Issue.create({
        ProjectID:req.body.projectID,
        Title:req.body.name,
        Description:req.body.description,
        Author:req.body.author,
        Labels:req.body.labels,
    })

    let project=await Project.findById({_id:req.body.projectID}).then({
        function(x){
            project=x;
            return x;
        }
    });
    let projectlabel=project['Label'];
    var c = projectlabel.concat(req.body.labels);
    var nprojectlabel = c.filter((item, pos) => c.indexOf(item) === pos);

    Project.findByIdAndUpdate({_id:req.body.projectID},{Label:nprojectlabel}).then(function(d){
        console.log(d);
        console.log('is the then ');
        
    }).catch((e)=>{console.log(e);console.log('is the catch ');});


    let url='/show-project/?id='+req.body.projectID;
    res.redirect(url);

    // console.log('we got hit here');
    // res.redirect('back');
}