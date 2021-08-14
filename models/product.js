const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productname:{
        type:String
    },
    quantity:{
        type:String
    },
    price:{
        type:String
    },
    stock:{
        type:String
    },
    discontinued:{
        type:Boolean
    },
    categoryid:{
        type:String
    }
})

const abhi = new mongoose.model('Product',productSchema)
module.exports = abhi