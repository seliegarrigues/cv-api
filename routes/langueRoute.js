// routes / langueRoute.js
const express = require('express')

const router = express.Router()
const langueModel = require('../models/langueModel')


router.get("/langue", async (req, res) => {
    const langues = await langueModel.find()
    res.json(langues)
})

router.post('/langue', async (req, res) => {
    const langue = req.body
    const newLangue = await langueModel.create(langue)
    res.json(newLangue)
    // res.json ({message:`La langue ${langue.name} à été ajouté`})
})
router.delete('/langue/:id', async(req,res)=>{
    const {id}= req.params
    // const id = req.params.id
    //  const langue = await langueModel.findById(id)

    await langueModel.findByIdAndDelete(id)
    res.json({message : 'une langue a été supprimée'})
})


module.exports = router
