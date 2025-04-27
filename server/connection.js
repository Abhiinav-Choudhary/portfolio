const mongoose = require('mongoose')

async function ConnectDB(){
    try {
        return await mongoose.connect('mongodb://127.0.0.1:27017/portfolio',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log(error);
        
    }

}

module.exports = ConnectDB