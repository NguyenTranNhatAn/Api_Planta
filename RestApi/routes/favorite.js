var express = require('express');
var router = express.Router();
var FavoriteController = require('../modules/Favorites/FavoriteController');



router.post('/api/add', async function (req, res) {
    try {
        const { userId, productId } = req.body;

        const favorite = await FavoriteController.insert(userId, productId);
        console.log(favorite)
        res.status(200).json(favorite)
    } catch (error) {
        console.log(error);
        res.status(414).json({ favorite: {userId:null, productId:null } });
    }
});

router.get('/api/getFavorite', async function (req, res) {
    try {
        const {userId}=req.query
        const favorite = await FavoriteController.getFavorite(userId)
        res.status(200).json( favorite )
  
    } catch (error) {
        console.log(error);
       
    }
  })
  router.get('/api/getCheckFavor', async function (req, res) {
    try {
        const {userId,productId}=req.query
        const favorite = await FavoriteController.checkFavorite(userId,productId)
      if(favorite)
        {
            res.status(200).json( {status:true} )
        }
       else {
            res.status(200).json( {status:false} )
        }
  
    } catch (error) {
        console.log(error);
       
       
    }
  })
  router.get('/api/deleteOne', async function (req, res) {
    try {

        const { _id } = req.query;
        let cart;
        cart = await FavoriteController.remove(_id);
        res.status(200).json({ status: 'true' })
    } catch (error) {
        console.log(error);
        res.status(414).json({ status: 'false' });
    }
})

module.exports = router;