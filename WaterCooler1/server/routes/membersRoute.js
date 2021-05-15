var express = require('express');
var router = express.Router();

// Require Member controller modules
var member_controller = require('../controllers/memberController');

/// MEMBER ROUTES ///

// GET home page.
router.get('/', member_controller.index);

// GET request for one Member.
router.get('/detail/:id', member_controller.member_detail);

// GET request for list of all Members
router.get('/all', member_controller.member_list);

// POST request for creating a Member
router.post('/create', member_controller.member_create_post);

// POST request to update Member about
router.post('/:id/updateAbout', member_controller.member_update_about);

// DELETE request to delete a Member
router.delete('/:id/delete', member_controller.member_delete_post);

module.exports = router;