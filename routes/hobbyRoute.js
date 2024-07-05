// routes/hobbyRoute.js

const express = require('express')
const router = express.Router()

const hobbyModel = require('../models/hobbyModel')

router.get('/hobby', async (req, res) => {
    const hobby = await hobbyModel.find()
    console.log(hobby);
    res.json(hobby)
})

router.post('/hobby', async (req, res) => {
    const hobby = req.body
    console.log(hobby)
     const newHobby = await hobbyModel.create(hobby)
    res.json(hobby)
     // res.json ({message:`le centre d'interet ${hobby.name} à été ajouté`})
})

router.delete('/hobby/:id', async (req, res) => {
    const { id } = req.params
     // const id = req.params.id
    //  const hobby = await hobbyModel.findById(id)

    await hobbyModel.findByIdAndDelete(id)
    res.json({ message: `Le loisir ${id} a été supprimé` }) // Corrected the message format
})

module.exports = router;
