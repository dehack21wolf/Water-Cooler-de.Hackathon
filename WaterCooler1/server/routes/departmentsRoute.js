var express = require('express');
var router = express.Router();

// Require Department controller modules
var department_controller = require('../controllers/departmentController');

/// DEPARTMENT ROUTES ///

// GET home page
router.get('/', department_controller.index);

// GET request for one Department
router.get('/detail/:id', department_controller.department_detail);

// GET request for list of all Departments
router.get('/all', department_controller.department_list);

// POST request for creating a Department
router.post('/create', department_controller.department_create_post);

// POST request to add a single Member to this Department by using Member ID
router.post('/:id/addMember', department_controller.department_add_member);

// POST request to remove a single Member from this Department by using Member ID
router.post('/:id/removeMember', department_controller.department_remove_member);

// POST request to update Department name
router.post('/:id/updateName', department_controller.department_update_name);

// DELETE request to delete a Department
router.delete('/:id/delete', department_controller.department_delete_post);



module.exports = router;