var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var ActorSchema = new Schema({
    actorname: {type: String, required: true, index: {unique: false}},
    charactername: {type: String, required: true, index: {unique: false}}
});

var MovieSchema = new Schema({
    title: { type: String, required: true, index: { unique: false }},
    year: {type: Number, required: true, index: {unique: true}},
    genre: {type: String, enum: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Thriller", "Western"]},
    actors: {type: [ActorSchema], min: 3}
});

MovieSchema.pre('save',function(next){
    if(this.actors.length < 3){
        return next(new Error('Fewer than 3 actors'))
    }
    next()
})

// return the model
module.exports = mongoose.model('Movies', MovieSchema);