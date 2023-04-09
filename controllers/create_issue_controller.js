/*Issue creation page is rendered using this controller*/
const Project=require('../models/project');
module.exports.createIssueView=async function(req,res){
    let pID=req.query.id;
    let project=await Project.findById({_id:pID}).then({
        function(x){
            project=x;
            return x;
        }
    });

    return res.render('create-issue-view',{
        title:'Create Issue Page',
        pID,
        project
    });
}
