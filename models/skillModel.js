//models/skillModel.js
const mongoose= require('mongoose')

const skillSchema = mongoose.Schema({
     skill: String
})

const Skill=mongoose.model('Skill',skillSchema )
module.exports = Skill