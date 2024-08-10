const ProductsModel = require('./ProductsModel');
const CategoryModel = require('../Categories/CategoriesModel')
const getAll = async () => {
    try {
        const products = await ProductsModel.find({});
        return products;
    } catch (error) {
        console.log(error);
    }
}
const getByType = async(cat_id) =>{
    try {
        let data =[]
        const categories = await CategoryModel.find({});
        for (const category of categories ){
            const product = await ProductsModel.find(category.cat_id)
            data.push({
                categoryName: category.name,
                product:product
            })
        }
        return data
        //const product = await ProductsModel 
    } catch (error) {
        console.log(error);
    }
}

const getType = async (cat_id) => {
    try {
        const product = await ProductsModel.find({ cat_id: cat_id });
        return product;
    } catch (error) {
        console.log(error);
    }
}

const getDetail = async (_id) => {
    try {
        const product = await ProductsModel.findOne({ _id: _id });
        return product;
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
const insert = async (name, images,price,size,qty,originer,cat_id) => {
    try {
        const product = new ProductsModel({ name, images,price,size,qty,originer,cat_id });
        await product.save();
        return product;
    } catch (error) {
        console.log(error);
    }
}
const update = async (_id,name, images,price,size,qty,originer,cat_id) => {
    try {
        const product = ProductsModel.findByIdAndUpdate(_id, {name, images,price,size,qty,originer,cat_id });
        return product;
    } catch (error) {
        console.log(error);
    }
}


const remove = async (_id) => {
    try {
        await ProductsModel.deleteOne({ _id: _id })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getByType, getAll, getType,insert, update,remove,getDetail, getName }