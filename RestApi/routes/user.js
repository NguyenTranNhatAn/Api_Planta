var express = require('express');
var router = express.Router();
var UserController = require('../modules/Users/UserController')

router.post('/api/register', async function (req, res) {
  try {

    const { name, phone,address, email, password } = req.body;
    var status="true";
    var mess;
    var checkEmail = await UserController.checkEmail(email);
    var checkPhone = await UserController.checkPhone(phone);
    if(checkEmail ===true && checkPhone  ===true)
    {
      status = "Exist";
        mess= "Email và số điện thoại đã được đăng kí";
    }
    else{
      if( checkEmail ===true)
      {
        
          status = "Email Failed";
          mess= "Email đã tồn tại";
      }
      if(checkPhone ===true)
      {
        status = "Phone Failed";
        mess= "Số điện thoại đã được đăng kí";
      }
      if(checkEmail ===false && checkPhone ===false){
        mess= "Đăng kí thành công"
        user = await UserController.register(name, phone,address ,email, password);
      }  
    }
 
    res.status(200).json({ status: status,mess:mess })
  } catch (error) {
    mess ='Đăng kí không thành công'
    console.log(error);
    res.status(414).json({ status: 'false', user: user, mess:mess });
  }
})
router.post('/api/update', async function (req, res) {
  try {

      const {_id,name,email,address,phone} = req.body;
      let user;
      user = await UserController.update(_id,name,email,address,phone);
      res.status(200).json({ status: 'true',user: user })
  } catch (error) {
      console.log(error);
      res.status(414).json({ status: 'false',user: user });
  }
})
router.get('/api/getAll', async function (req, res) {
  try {
      const user = await UserController.getAll()
      res.status(200).json( user )

  } catch (error) {
      console.log(error);
      res.status(414).json({ user: { name: null, cat_id: null } });
  }
})


router.post('/api/login', async function (req, res) {
  try {

    const { email, password } = req.body;
    var user;
    user = await UserController.login(email, password);
    if(!user)
    {
      res.status(414).json({ status: 'false', user: user })
    }
    else{
      res.status(200).json({ status: 'true', user: user })
    }
   
  } catch (error) {
    console.log(error);
    res.status(414).json({ status: 'false', user: user });
  }
})
router.get('/api/find', async function (req, res) {
  try {

    const { _id } = req.query;
    var user;
    user = await UserController.find({_id:_id});
    res.status(200).json(user)
   
  } catch (error) {
    console.log(error);
    res.status(414).json({ status: 'false', user: user });
  }
})
module.exports = router;
