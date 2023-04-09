const express=require('express');
const router=express.Router();
const home_controller=require('../controllers/home_controller');
const create_project_controller=require('../controllers/create_project_controller');
const create_project=require('../controllers/create_project');


router.get('/',home_controller.home);
router.post('/',home_controller.home);

router.get('/create-project-page',create_project_controller.createProjectView);
router.post('/create-project',create_project.createProject);

router.use('/show-project',require('./project'));

module.exports=router;