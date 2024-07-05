// app.js
const express = require('express')
require('dotenv').config()
const cors = require('cors')

const contactRoute = require('./routes/contactRoute')
const skillRoute= require('./routes/skillRoute')
const langueRoute = require ('./routes/langueRoute')
const hobbyRoute = require('./routes/hobbyRoute')
const formationRoute = require('./routes/formationRoute')
const experienceRoute = require('./routes/experienceRoute')

console.log(process.env.PORT);

const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT


mongoose.connect(process.env.DB)
.then(()=>{
    console.log('la connection à la base de donnée avec succes');
})
.catch ((error)=>{
    console.log(error);
    }    )
    
    app.listen(process.env.PORT, ()=> {
        console.log(`le serveur tourne sur le port ${PORT}`);
        })

app.use (cors())
app.use(express.json())
app.use('', contactRoute)
app.use('', skillRoute)
app.use('', langueRoute)
app.use('', hobbyRoute)
app.use('', formationRoute)
app.use('', experienceRoute)
