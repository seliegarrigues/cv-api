// routes/formationRoute.js
const express = require('express')

const router = express.Router()
const formationModel = require('../models/formationModel')

router.get ('/formation', async (req, res) =>{
    const formations = await formationModel.find()
    res.json(formations)
})

router.post("/formation", async (req, res)=>{
    const formation = req.body
    const newFormation = await formationModel.create(formation)
    res.json(newFormation)
    // res.json({message:`La formation ${formation.name} a été ajoutée`})
})


router.delete('/formation/:id', async(req,res)=>{
    const {id}= req.params
    //const id = req.params.id
    // const formation = await formationModel.findById(id)

    await formationModel.findByIdAndDelete(id)
    res.json({message : 'une formation a été supprimée'})
})
module.exports = router 