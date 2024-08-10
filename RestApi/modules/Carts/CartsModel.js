
const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const ObjectId = Schema.ObjectId;
const CatSchema= new Schema({
    userId :{type:ObjectId,ref:'user',default:null},
    productId :{type: ObjectId, ref:'product',default:null},
    price :Number,
    qty : Number,
    name :String,
    type:String,
    image:String

  

    
});

module.exports= mongoose.model('cart', CatSchema);