const CategoryModel = require('./CategoriesModel');

const getAll = async () => {
    try {
        const categories = await CategoryModel.find({});
        return categories;
    } catch (error) {
        console.log(error);
    }
}

const getParent = async () => {
    try {
        const categories = await CategoryModel.find({ parentId: null });
        return categories;
    } catch (error) {
        console.log(error);
    }
}
const getById = async (_id) => {
    try {
      
        
         const   categories = await CategoryModel.findOne({ _id: _id });
     
       
        
        return categories;
    } catch (error) {
        console.log(error);
    }
}

const getDetail = async (_id) => {
    try {
        const categories = await CategoryModel.findOne({ _id: _id });
        return categories;
    } catch (error) {
        console.log(error);
    }
}


const getSub = async (parentId) => {
    try {
        const categories = await CategoryModel.find({ parentId: parentId }).populate('parentId', '_id name');
        return categories;
    } catch (error) {
        console.log(error);
    }
}

const insert = async (name, parentId) => {
    try {   
        const    category = new CategoryModel({ name, parentId });
        await category.save();
        return category;
    } catch (error) {
        console.log(error);
    }
}
const update = async (catId, name, parentId) => {
    try {
        
        const category = CategoryModel.findByIdAndUpdate(catId, { name, parentId });
        return category;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (_id) => {
    try {
        await CategoryModel.deleteOne({ _id: _id })
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getAll, getParent, getSub, insert, update, remove, getById,getDetail }