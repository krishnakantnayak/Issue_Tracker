/*Project detailed view isrendered and queries fetched using this cotroller*/
const Project = require('../models/project');
const Issue = require('../models/issues');
module.exports.showProject = function (req, res) {

    let id = req.query.id;
    /*for ajax request*/
    if (req.xhr) {
        Issue.find({}).then(function(issuesList){
            return res.status(200).json({
                data:issuesList,
                message:"All issues fetched"
            })
        })
    }
    /*render page*/
    else {
        Project.findById(id).then(function (pobj) {

            Issue.find({ ProjectID: id }).then(function (issues) {

                return res.render('project-details-view', {
                    title: pobj.Name,
                    project: pobj,
                    issuesList: issues
                });

            })


        })
    }

}
