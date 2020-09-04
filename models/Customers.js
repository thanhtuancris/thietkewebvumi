const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Customer = new Schema({
    hoten: {type: String, maxLength: 255},
    sodt: {type: String, maxLength: 255},
    email: {type: String,  maxLength: 255},
    diachi: {type: String,  maxLength: 255},
    mota: {type: String,  maxLength: 255},
    lienlac: {type: String,  maxLength: 255},
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Customer', Customer);