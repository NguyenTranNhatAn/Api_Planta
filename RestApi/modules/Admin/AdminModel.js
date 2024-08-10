const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AdminSchema= new Schema({
    username:{type: String, require: true},
    password:{type: String, require: true},
});

module.exports = mongoose.model('admin', AdminSchema);