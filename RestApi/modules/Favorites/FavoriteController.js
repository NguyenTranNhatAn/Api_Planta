const FavoritesModel = require('./FavoritesModel')

const insert = async (userId, productId) => {
    try {

        const favorite = new FavoritesModel({ userId ,productId });
        await favorite.save();
        return favorite;
    } catch (error) {
        console.log(error);
    }
}

const getFavorite = async (userId) => {
    try {  
       
        const    bill = await FavoritesModel.find({userId:userId});

        return bill;
    } catch (error) {
        console.log(error);
    }
}
const checkFavorite = async (userId,productId) => {
    try {  
       
        const    favorite = await FavoritesModel.findOne({userId:userId,productId:productId}).populate('productId');

        return favorite;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (_id) => {
    try {
        await FavoritesModel.deleteOne({ _id: _id })
    } catch (error) {
        console.log(error);
    }
}
module.exports = { insert,getFavorite,checkFavorite,remove }