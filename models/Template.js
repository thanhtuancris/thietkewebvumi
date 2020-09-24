const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Template = new Schema({
    title: String,
    image: String,
    content: {type: String},
    demo: {type: String}
});

module.exports = mongoose.model('Template', Template);