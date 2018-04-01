var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var ReviewsSchema = new Schema({
    Id: {type: String, required: true, index: {unique: false}},
    Reviewer: { type: String, required: true, index: { unique: false }},
    Review: {type: String, required: true, index: {unique: true}},
    Stars: {type: String, enum: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"]}
});

// return the model
module.exports = mongoose.model('Reviews', ReviewsSchema);