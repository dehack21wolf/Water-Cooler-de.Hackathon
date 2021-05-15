var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Specify Schema for single MS Teams member in DB

var MemberSchema = new Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true},
    about: {type: String, required: false},
    image: {type: String, required: false}
  },{
    versionKey: false // When adding a new member, don't create a revision key (__v)
});

//Export model
module.exports = mongoose.model('Member', MemberSchema);