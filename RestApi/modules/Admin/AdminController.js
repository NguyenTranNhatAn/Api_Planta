const AdminModel = require('./AdminModel');

const login = async function (username,password) {
    try {
      const admin = await AdminModel.findOne({username:username,password:password}) ;
      return admin; 
    } catch (error) {
        console.log(error)
    }
}
const changePassword= async(id,newPassword) =>{

}
module.exports= {login};