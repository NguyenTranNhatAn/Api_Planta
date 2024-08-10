const BillsModel = require('./BillsModel')

const insert = async (userId, cart, status,orderDate) => {
    try {

        const bill = new BillsModel({ userId ,cart,status,orderDate });
        await bill.save();
        return bill;
    } catch (error) {
        console.log(error);
    }
}
const getAll = async () => {
    try {
        const bill = await BillsModel.find({});
        return bill;
    } catch (error) {
        console.log(error);
    }
}
const checkBill = async (userId) => {
    try {  
       
        const    bill = await BillsModel.find({userId:userId});

        return bill;
    } catch (error) {
        console.log(error);
    }
}
const checkDetail = async (userId,_id) => {
    try {  
       
        const    bill = await BillsModel.findOne({userId:userId,_id:_id});

        return bill;
    } catch (error) {
        console.log(error);
    }
}
module.exports = { insert,checkBill,checkDetail,getAll }