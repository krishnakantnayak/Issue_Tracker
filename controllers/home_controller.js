/*home page is rendered and search queries on home is done using this controler*/
const Project = require('../models/project');
module.exports.home = function (req, res) {

    /*for ajax request*/
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
    /*home page renderer*/
    else {
        Project.find({}).then(function (list) {

            return res.render('home', {
                title: 'Home Page',
                projectlist: list
            });
        })
    }



}

