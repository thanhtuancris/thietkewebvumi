const mongoose = require('mongoose');

async function connect(){
    
    try{
        await mongoose.connect('mongodb://localhost:27017/thietkewebvumi', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }catch(e){
        console.log('Failed to connect to MongoDB');
    }
}

module.exports = {connect}