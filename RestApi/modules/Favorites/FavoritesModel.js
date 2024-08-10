const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FavoriteSchema = new Schema({

    userId: { type: ObjectId, ref: 'user' },
    productId:{type:ObjectId,ref:'product'},
   
   
    // cart: [
    //     {
    //         carts: { type: ObjectId, ref: 'cart' },


    //     }],
   
});


module.exports = mongoose.model('favorite', FavoriteSchema);