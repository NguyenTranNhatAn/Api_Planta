const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BillSchema = new Schema({

    userId: { type: ObjectId, ref: 'user' },
    orderDate: { type: Date, default: Date.now() },
    cart: [Object],
    // cart: [
    //     {
    //         carts: { type: ObjectId, ref: 'cart' },


    //     }],
    status: String,
});


module.exports = mongoose.model('bill', BillSchema);