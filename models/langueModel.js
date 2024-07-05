const mongoose= require('mongoose') // mongoose est un outil de lien entre node et mongo DB

const langueSchema = mongoose.Schema ({
name : String,
level: String
})

const Langue = mongoose.model('langue', langueSchema) // export du modele por l'utiliser ailleurs
module.exports = Langue