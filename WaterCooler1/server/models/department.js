var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Specify Schema for single MS Department in DB

var DepartmentSchema = new Schema(
  {
    name: {type: String, required: true},
    members: {type: Array, required: true},
  },{
    versionKey: false // When adding a new member, don't create a revision key (__v)
});

//Export model
module.exports = mongoose.model('Department', DepartmentSchema);