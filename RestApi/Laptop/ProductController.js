const ProductModel = require('./ProductModel');

const insert = async (name,image,price) => {
    try {

        const product = new ProductModel({ name,image,price });
        await product.save();
        return product;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {insert }