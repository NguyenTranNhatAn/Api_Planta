var express = require('express');
var router = express.Router();
var CategoryController = require('../modules/Categories/CategoryController')

router.get('/api/add', async function (req, res) {
    try {
        const { name, parentId } = req.query;
        console.log(req.query);
        let category;
        if (parentId == '') {
            category = await CategoryController.insert(name, null)
        }
        else {
            category = await CategoryController.insert(name, parentId);
        }
        res.status(200).json({ category })
    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
})

router.get('/api/getAll', async function (req, res) {
    try {
        const category = await CategoryController.getAll()
        res.status(200).json(category)

    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
})
router.get('/api/getID', async function (req, res) {
    try {
        const { _id } = req.query
        console.log(_id)
        var category
        if (_id == "") {

            category = {
                name: "",
            }
        }
        else {
            category = await CategoryController.getById(_id)
        }


        res.status(200).json(category)

    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
});

router.get('/api/getAlltest', async function (req, res, next) {
    try {
        const category = await CategoryController.getAll()
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Thay đổi port nếu cần
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
        );
        next();
        res.status(200).json({ category })

    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
})
router.get('/api/getDetail', async function (req, res) {
    try {
        const {_id} =req.query;
      const  category = await CategoryController.getDetail(_id);
        res.status(200).json(category)
    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
})


router.get('/api/getParent', async function (req, res) {
    try {


        let category;
        category = await CategoryController.getParent();
        res.status(200).json(category)
    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
})
router.get('/api/getSub', async function (req, res) {
    try {

        const { parentId } = req.query;
        let category;
        category = await CategoryController.getSub(parentId);
        res.status(200).json(category)
    } catch (error) {
        console.log(error);
        res.status(414).json({ category: { name: null, parentId: null } });
    }
})

router.get('/api/delete', async function (req, res) {
    try {

        const { _id } = req.query;
        let category;
        category = await CategoryController.remove(_id);
        res.status(200).json({ status: 'true' })
    } catch (error) {
        console.log(error);
        res.status(414).json({ status: 'false' });
    }
})

router.get('/api/update', async function (req, res) {
    try {

        const { catId, name, parentId } = req.query;
        let category;
        if(parentId =="")
        {
            category = await CategoryController.update(catId, name, null);
        }
        else{
            category = await CategoryController.update(catId, name, parentId);
        }
       
        res.status(200).json({ status: 'true', category: category })
    } catch (error) {
        console.log(error);
        res.status(414).json({ status: 'false', category: category });
    }
})

module.exports = router;