//models/hobbyModel.js
const mongoose = require('mongoose')

const hobbySchema =  new mongoose.Schema ({
    description: String,
})

const hobby =mongoose.model('hobby',hobbySchema)
module.exports = hobby