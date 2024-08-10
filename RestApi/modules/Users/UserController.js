const UserModel = require('./UserModel');
const bcrypt = require('bcryptjs');

// const register = async(email,password) =>{
//     //1. Tìm user theo email:select email,password,name,id,from users where email
//     //2. So sánh password
//     //3. Trả về user nếu đúng, null nếu sai
//     const user = await UserModel.findOne{{email}};
//     /// kiểm tra password đã mã hóa
//     if(user && bcrypt.com)
// }
const register = async (name, phone,address, email, password,) => {
    //1. Taọ user mới
    //2.lưu user mới
    //3. Trả về user mới
    const salt = bcrypt.genSaltSync(10);
     
    const hash = bcrypt.hashSync(password,salt);
    const user = new UserModel({name,email,address,phone,password:hash});
    await user.save();
    return user;
};
const getAll = async () => {
    try {
        const user = await UserModel.find({});
        return user;
    } catch (error) {
        console.log(error);
    }
}
const checkEmail= async (email) =>{
   try {
    var user = await UserModel.findOne({ email });
   } catch (error) {
    console.log(err)
   }
    
    return user ? true:false;
}

const checkPhone= async (phone) =>{
    try {
     var user = await UserModel.findOne({ phone });
    } catch (error) {
     console.log(err)
    }
     
     return user ? true:false;
 }


const login = async (email, password) => {
    try {
        // Tìm user theo email
        const user = await UserModel.findOne({ email });

        // Kiểm tra xem user có tồn tại không
        if (!user) {
            return null; // Trả về null nếu không tìm thấy user
        }

        // So sánh password đã hash với password người dùng nhập vào
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // Kiểm tra xem mật khẩu có đúng không
        if (!isPasswordValid) {
            return null; // Trả về null nếu mật khẩu không đúng
        }

        // Nếu mọi thứ đều đúng, trả về user
        return user;
    } catch (error) {
        throw error; // Xử lý lỗi nếu có
    }
};
const update = async (_id,name,email,address,phone) => {
    try {
        const user = UserModel.findByIdAndUpdate(_id, {name,email,address,phone});
        return user;
    } catch (error) {
        console.log(error);
    }
}

const find = async (_id) => {
    try {
        const user = UserModel.findOne(_id);
        return user;
    } catch (error) {
        console.log(error);
    }
}



module.exports={register,login,checkEmail,checkPhone,update,find,getAll}