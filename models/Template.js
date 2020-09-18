const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Template = new Schema({
    Title: String,
    Image: String,
    Content: {type: String},
    demo: {type: String}
});

module.exports = mongoose.model('Template', Template);