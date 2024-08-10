const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const RateSchema = new Schema({
    productId: { type: ObjectId, ref: 'product' },
    rateDate: { type: Date, default: Date.now() },
    comment: { type: String },
    rating:{type:Number},
    userId: { type: ObjectId, ref: 'user' }

});

module.exports = mongoose.model('rate', RateSchema);