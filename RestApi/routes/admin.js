var express = require('express');
var router = express.Router();
var AdminController = require('../modules/Admin/AdminController')

router.post('/api/login', async function (req, res)  {
    try {
        const { username, password } = req.body;
        const admin = await AdminController.login(username, password);
        
        if(!admin)
        {
          res.status(414).json({ status: 'false', admin: admin })
        }
        else{
          res.status(200).json({ status: 'true', admin: admin })
        }
    } catch (error) {
        console.log(error);
        res.status(414).json({ status: 'false', admin: admin })
    }
});

router.get('/login', function (req, res) {
    res.render('login',)
});
router.post('/loginProcess', async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await AdminController.login(username, password);
        if (admin) {
            res.render('index', { msg: "Đăng nhập thành công" });
        }
        else {
            res.render('login', { msg: "Đăng nhập thất bại" });
        }
    } catch (error) {
        console.log(error)
    }
});



module.exports = router;