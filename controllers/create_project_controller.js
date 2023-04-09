/this contrller renders create project view/
module.exports.createProjectView=function(req,res){

    return res.render('create-project-view',{
        title:'Create Project Form'
    });

    
}
