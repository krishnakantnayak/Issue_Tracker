const Project = require('../models/project');
module.exports.home = function (req, res) {


    if (req.xhr) {
        Project.find({}).then(function (list) {
            return res.status(200).json({
                data: {
                    list: list
                },
                message: "Fetched all projects"
            })
        })
    }

    else {
        Project.find({}).then(function (list) {

            return res.render('home', {
                title: 'Home Page',
                projectlist: list
            });
        })
    }



}

