
const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const ObjectId = Schema.ObjectId;
const CatSchema= new Schema({
    name:{type: String, require: true},
    parentId :{type: ObjectId, ref:'category',default:null},
  

    
});

module.exports= mongoose.model('category', CatSchema);