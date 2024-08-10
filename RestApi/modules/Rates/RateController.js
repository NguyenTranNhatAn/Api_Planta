const RatesModel = require('./RatesModel');



const getAll = async () => {
    try {
        const rate = await RatesModel.find({  });
        return rate;
    } catch (error) {
        console.log(error);
    }
}
const getName = async (name) => {
    try {
        
        const product = await ProductsModel.find({ name:{  $regex: `${name}`,$options :'i'} });
        return product;
    } catch (error) {
        console.log(error);
    }
}
const insert = async (userId,productId,rating,comment,rateDate) => {
    try {
        const rate = new RatesModel({userId,productId,rating,comment,rateDate });
        await rate.save();
        return rate;
    } catch (error) {
        console.log(error);
    }
}
const update = async (_id,rating, comment,rateDate) => {
    try {
        const rate = RatesModel.findByIdAndUpdate(_id, {rating, comment,rateDate });
        return rate;
    } catch (error) {
        console.log(error);
    }
}


const remove = async (_id) => {
    try {
        await RatesModel.deleteOne({ _id: _id })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { insert, update,remove,getAll, getName }