var express = require('express');
var router = express.Router();
var BillController = require('../modules/Bills/BillController')


router.post('/api/add', async function (req, res) {
    try {
        const { userId, cart, status, orderDate } = req.body;

        const bill = await BillController.insert(userId, cart, status, orderDate);
        console.log(bill)
        res.status(200).json(bill)
    } catch (error) {
        console.log(error);
        res.status(414).json({ bill: { name: null, parentId: null } });
    }
});
router.get('/api/getAll', async function (req, res) {
    try {
        const bill = await BillController.getAll()
        res.status(200).json( bill )
  
    } catch (error) {
        console.log(error);
        res.status(414).json({ bill: { name: null, cat_id: null } });
    }
  })
router.get('/api/getBill', async function (req, res) {
    try {
        const { userId } = req.query;
        const bill = await BillController.checkBill(userId)
        res.status(200).json(bill)

    } catch (error) {
        console.log(error);
        res.status(414).json({ bill: { name: null, parentId: null } });
    }
})
router.get('/api/getDetail', async function (req, res) {
    try {
        const { userId, _id } = req.query;
        const bill = await BillController.checkDetail(userId, _id)
        res.status(200).json(bill)

    } catch (error) {
        console.log(error);
        res.status(414).json({ bill: { name: null, parentId: null } });
    }
})

module.exports = router;