// Require Department model and async to process multiple requests
var Department = require('../models/department');


// Home Page (index). Displays count of all documents (departments)
exports.index = function(req, res) {
    // Pass an empty object as match condition to find all documents of this collection
      Department.countDocuments({}).exec(function (err, results) { 
          if (err) { return next(err); }
        // Return as JSON file
        res.json({total_departments: results});
    });
};

// Display list of all Departments.
exports.department_list = function(req, res, next) {
    // Find's a Department's name and array of its members Object IDs
    Department.find({}, 'name members').exec(function (err, list_departments) {
        if (err) { return next(err); }
        res.json(list_departments);
      });
  
  };

// Display details for a specific department.
exports.department_detail = function(req, res, next) {
    
    // Find the department by using their id
    Department.findById(req.params.id).exec(function (err, results) {
        if (err) { return next(err); }
        if (results==null) { // No results.
            var err = new Error('Department not found');
            err.status = 404;
            return next(err);
        }
        // Successful, return as a JSON file
        res.json(results);
    });

};

// Create a new Department
exports.department_create_post = (req, res, next) => {
    // Set variables from passed JSON file
    const name = req.body.name;
    const members = req.body.members;
        // Create a Department object from constants above
        var newDepartment = new Department({ 
            name,
            members
           });

            // Save Department
            newDepartment.save()
            .then(() => res.json('Department created!'))
            .catch(err => res.status(400).json('Error: ' + err));
};

// Update a Department's name
exports.department_update_name = (req, res, next) => {
    // Find Department by ID, then replace it's name key by what's sent in JSON file
    Department.findById(req.params.id)
    .then(department => {
      department.name = req.body.name;
      // If no errors, save department and show JSON message showing success
      department.save()
        .then(() => res.json('Department name updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

// Add a single member to this Department
exports.department_add_member = (req, res, next) => {
    // Find department by ID, then push this member that's sent in JSON file
    Department.findById(req.params.id)
    .then(department => {
      department.members.push(req.body.members);
      // If no errors, save book and show JSON message showing success
      department.save()
        .then(() => res.json('Department member added'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

// Remove a single member from this Department
exports.department_remove_member = (req, res, next) => {
    // Find department by ID, then push this member that's sent in JSON file
    Department.findById(req.params.id)
    .then(department => {
      department.members.pull(req.body.members);
      // If no errors, save book and show JSON message showing success
      department.save()
        .then(() => res.json('Department member removed'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

// Delete a Department
exports.department_delete_post = (req, res, next) => {
    // Find department by ID. If successful, delete it
    Department.findByIdAndDelete(req.params.id)
    .then(() => res.json('Department deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
};
