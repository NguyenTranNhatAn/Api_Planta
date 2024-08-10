const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const ObjectId = Schema.ObjectId;
const ProductSchema= new Schema({
    name:{type: String, require: true},
    images:[String],
    image:String,
    price:{type: Number, default:0},
    size:String,
    qty:Number,
    originer:String,
    cat_id :{type: ObjectId, ref:'category'}
    
});

module.exports= mongoose.model('product', ProductSchema);