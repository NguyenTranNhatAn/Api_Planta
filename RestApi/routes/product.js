var express = require('express');
var router = express.Router();
var ProductController = require('../modules/Products/ProductController')
var CategoryController = require('../modules/Categories/CategoryController')
router.get('/api/getAll', async function (req, res) {
    try {
        const product = await ProductController.getAll()
        res.status(200).json( product )

    } catch (error) {
        console.log(error);
        res.status(414).json({ product: { name: null, cat_id: null } });
    }
})
router.get('/api/getByType', async function (req, res) {
    try {
        const product = await ProductController.getByType()
        res.status(200).json( product )

    } catch (error) {
        console.log(error);
        res.status(414).json({ product: { name: null, cat_id: null } });
    }
})

router.get('/api/getType', async function (req, res) {
    try {

        const { cat_id } = req.query;
        let product;
        if(cat_id =="")
        {
            product = await ProductController.getAll();
        }
        else{
            product = await ProductController.getType(cat_id);
        }
      
        res.status(200).json( product )
    } catch (error) {
        console.log(error);
        res.status(414).json({ product: { name: null, cat_id: null } });
    }
})

// router.get('/api/add', async function (req, res) {
//     try {
//         const {name, images,price,size,qty,originer,cat_id } = req.query;
//         console.log(req.query);
//         let product;
        
//         product = await ProductController.insert(name, images,price,size,qty,originer,cat_id)
        
        
//         res.status(200).json({ product })
//     } catch (error) {
//         console.log(error);
//         res.status(414).json({ product: { name: null, cat_id: null } });
//     }
// })
// router.get('/api/update', async function (req, res) {
//     try {

//         const { _id,name, images,price,size,qty,originer,cat_id } = req.query;
//         let product;
//         product = await ProductController.update(_id,name, images,price,size,qty,originer,cat_id );
//         res.status(200).json({ status: 'true',product: product })
//     } catch (error) {
//         console.log(error);
//         res.status(414).json({ status: 'false',product: product });
//     }
// })

router.get('/api/getDetail', async function (req, res) {
    try {

        const { _id } = req.query;
        let product;
        product = await ProductController.getDetail(_id);
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(414).json({ status: 'false' });
    }
})
// router.get('/api/delete', async function (req, res) {
//     try {

//         const { _id } = req.query;
//         let product;
//         product = await ProductController.remove(_id);
//         res.status(200).json({ status: 'true' })
//     } catch (error) {
//         console.log(error);
//         res.status(414).json({ status: 'false' });
//     }
// })

router.get('/api/getName', async function (req, res) {
   
  
    try {
        const { name } = req.query;
      const users = await ProductController.getName(name);
   
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy dữ liệu từ cơ sở dữ liệu.' });
    }
})

module.exports = router;