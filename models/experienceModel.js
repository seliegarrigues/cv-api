//models/experienceModel.js

const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema ({
    company: String, 
    position : String,
    years : String,
    mission: Array,

})

const experience = mongoose.model('experience', experienceSchema)
module.exports = experience