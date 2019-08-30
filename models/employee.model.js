const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    name: {type: String},
    age:{type:String},
    location:{type:String},
    email:{type:String},
    joined:{type:Date}
});


module.exports = mongoose.model('Employee', EmployeeSchema);
