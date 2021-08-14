const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryid:{
        type:String
    },
    categoryname:{
        type:String
    }
})

const abh = new mongoose.model('Category',categorySchema)
module.exports = abh