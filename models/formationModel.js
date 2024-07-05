//models/formationModel.js
const mongoose = require('mongoose')

const formationSchema = new mongoose.Schema ({
    name: String, 
    level: String, 
    year: String
    

})

const formation = mongoose.model('formation', formationSchema )
module.exports = formation
