const CartModel = require('./CartsModel')

const insert = async (userId, productId,price,qty,name,type,image) => {
    try {  
      
        const    cart = new CartModel({ userId, productId,price,qty,name,type,image });
        await cart.save();
        return cart;
    } catch (error) {
        console.log(error);
    }
}

const checkCart = async (userId, productId) => {
    try {  
      
        const    cart = await CartModel.findOne({userId:userId,productId:productId});

        return cart;
    } catch (error) {
        console.log(error);
    }
}
const deleteAll = async (userId) => {
    try {  
        const    cart = await CartModel.deleteMany({userId:userId});
        return cart;
    } catch (error) {
        console.log(error);
    }
}
const upDateCart = async (userId, qty,price) => {
    try {  
      
        const    cart = await CartModel.findByIdAndUpdate(userId,{ qty,price });

        return cart;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (_id) => {
    try {
        await CartModel.deleteOne({ _id: _id })
    } catch (error) {
        console.log(error);
    }
}




const cartByUser = async (userId) => {
    try {   
        const    cart = await CartModel.find({userId:userId});
     
        return cart;
    } catch (error) {
        console.log(error);
    }
}



module.exports = {insert, cartByUser,checkCart,upDateCart, remove,deleteAll}