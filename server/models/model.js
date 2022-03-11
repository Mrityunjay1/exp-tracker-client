const mongoose =  require('mongoose')

const Schema = mongoose.Schema;
//categories=>type of category and color
//transactions=>type of transaction and amount

const categories_model = new Schema({
    type: {type:String,default:"Investment"},
    color: {type:String,default:"#ffffff"}
})

const transactions_model = new Schema({
    name: {type:String,default:"Anonymous"},
    type: {type:String,default:"Investment"},
    amount: {type:Number,default:0}, 
    date: {type:Date,default:Date.now()}
})

const Categories= mongoose.model("categories",categories_model);
const Transaction = mongoose.model("transactions",transactions_model);

exports.default = Transaction;
module.exports = {
    Categories,
    Transaction
}