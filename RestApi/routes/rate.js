var express = require('express');
var router = express.Router();
var RateController = require('../modules/Rates/RateController')

router.post('/api/add', async function (req, res) {
    try {
        const { userId,productId,rating,comment,rateDate} = req.body;

        const rate = await RateController.insert(userId,productId,rating,comment,rateDate);
        console.log(rate)
        res.status(200).json(rate)
    } catch (error) {
        console.log(error);
        res.status(414).json({ rate: { name: null, parentId: null } });
    }
});

router.get('/api/update', async function (req, res) {
    try {
        const { _id,rating, comment,rateDate} = req.query;

        const rate = await RateController.update(_id,rating, comment,rateDate);
        console.log(rate)
        res.status(200).json(rate)
    } catch (error) {
        console.log(error);
        res.status(414).json({ rate: { name: null, parentId: null } });
    }
});


router.get('/api/getAll', async function (req, res) {
    try {
     

        const rate = await RateController.getAll();
        console.log(rate)
        res.status(200).json(rate)
    } catch (error) {
        console.log(error);
        res.status(414).json({ rate: { name: null, parentId: null } });
    }
});
router.get('/api/delete', async function (req, res) {
    try {

        const { _id } = req.query;
        let rate;
        rate = await RateController.remove(_id);
        res.status(200).json({ status: 'true' })
    } catch (error) {
        console.log(error);
        res.status(414).json({ status: 'false' });
    }
})
module.exports = router;