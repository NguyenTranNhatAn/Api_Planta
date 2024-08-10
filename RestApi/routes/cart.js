var express = require('express');
var router = express.Router();
var CartController = require('../modules/Carts/CartController')
var ProductController = require('../modules/Products/ProductController')
var CategoryController  = require('../modules/Categories/CategoryController')
router.get('/api/add', async function (req, res) {
    try {
        const { userId, qty ,productId } = req.query;
        console.log(req.query);
        const product = await ProductController.getDetail(productId);
        const check = await CartController.checkCart(userId, productId );
        
        if(check!=null)
        {
            
            const newQty =check.qty+Number(qty);
            const newPrice= product.price * newQty
            const update = await CartController.upDateCart(check._id,newQty,newPrice)
            res.status(200).json({ update });
            return;
        }
    
        const cate =  await CategoryController.getDetail(product.cat_id);
       
        const    cart = await CartController.insert(userId, productId,product.price*qty,qty,product.name,cate.name,product.image);
        console.log(product)
        res.status(200).json({ cart })
    } catch (error) {
        console.log(error);
        res.status(414).json({ cart: { name: null, parentId: null } });
    }
})

router.get('/api/getCart', async function (req, res) {
    try {
        const { userId } = req.query;
        const cart = await CartController.cartByUser(userId)
        res.status(200).json(cart)

    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
})
router.get('/api/minus', async function (req, res) {
    try {
        
        const {_id, userId ,productId } = req.query;
        let update;
        const check = await CartController.checkCart(userId, productId );
        const product = await ProductController.getDetail(productId );
            const newQty =check.qty-1;
            
            if(newQty==0)
            {
              const  status = await CartController.remove(_id);
                res.status(200).json("Xóa thành công");
                return;
            }
            const newPrice= product.price * newQty
           
             update = await CartController.upDateCart(_id,newQty,newPrice);
            
             res.status(200).json(update)
           
       
       

    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
})

router.get('/api/getDetail', async function (req, res) {
    try {
        const { userId,productId } = req.query;
        const cart = await CartController.checkCart(userId,productId)
        res.status(200).json(cart)

    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
})

router.get('/api/delete', async function (req, res) {
    try {

        const { _id } = req.query;
        let cart;
        cart = await CartController.remove(_id);
        res.status(200).json({ status: 'true' })
    } catch (error) {
        console.log(error);
        res.status(414).json({ status: 'false' });
    }
})


router.get('/api/deleteAll', async function (req, res) {
    try {

        const { userId } = req.query;
        let cart;
        cart = await CartController.deleteAll(userId);
        res.status(200).json({ status: 'true' })
    } catch (error) {
        console.log(error);
        res.status(414).json({ status: 'false' });
    }
})



module.exports = router;