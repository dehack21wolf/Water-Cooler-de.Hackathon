// Require Member model and async to process multiple requests
var Member = require('../models/member');


// Home Page (index). Displays count of all documents (members)
exports.index = function(req, res) {
    // Pass an empty object as match condition to find all documents of this collection
      Member.countDocuments({}).exec(function (err, results) { 
          if (err) { return next(err); }
        // Return as JSON file
        res.json({total_members: results});
    });
};

// Display list of all Members.
exports.member_list = function(req, res, next) {
    // Find's a Member's small img url
    Member.find({}, 'name image').exec(function (err, list_members) {
        if (err) { return next(err); }
        res.json(list_members);
      });
  
  };

// Display details for a specific member.
exports.member_detail = function(req, res, next) {
    
    // Find the member by using their id
    Member.findById(req.params.id).exec(function (err, results) {
        if (err) { return next(err); }
        if (results==null) { // No results.
            var err = new Error('Member not found');
            err.status = 404;
            return next(err);
        }
        // Successful, return as a JSON file
        res.json(results);
    });
};

// Create a new Member
exports.member_create_post = (req, res, next) => {
    // Set variables from passed JSON file
    const name = req.body.name;
    const email = req.body.email;
    const about = req.body.about;
    const image = req.body.image;
        // Create a Member object from constants above
        var newMember = new Member({ 
            name,
            email,
            about,
            image
           });

            // Save Member
            newMember.save()
            .then(() => res.json('Member created!'))
            .catch(err => res.status(400).json('Error: ' + err));
};

// Update a Member's about
exports.member_update_about = (req, res, next) => {
    // Find Member by ID, then replace it's about key by what's sent in JSON file
    Member.findById(req.params.id)
    .then(member => {
      member.about = req.body.about;
      // If no errors, save member and show JSON message showing success
      member.save()
        .then(() => res.json('Member about updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

// Delete a Member
exports.member_delete_post = (req, res, next) => {
    // Find member by ID. If successful, delete it
    Member.findByIdAndDelete(req.params.id)
    .then(() => res.json('Member deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
};

