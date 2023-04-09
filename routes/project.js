const express=require('express');
const router=express.Router();

const project_details=require('../controllers/project_details_controller');
const create_issue_view=require('../controllers/create_issue_controller');
const create_issue=require('../controllers/create_issue');

router.get('/',project_details.showProject);
router.post('/',project_details.showProject);
router.get('/create-issue-page',create_issue_view.createIssueView);

router.post('/create-issue-page/create-issue',create_issue.createIssue);

module.exports=router;