// models /contactModel.js
const mongoose= require('mongoose')

const contactSchema= mongoose.Schema({
    nom: {
        type: String,
    }, 
    prenom: String,
    email: String,
    tel: String,
    address: String,
})

const Contact= mongoose.model('Contact', contactSchema)
module.exports= Contact

