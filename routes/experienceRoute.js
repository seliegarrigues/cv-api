// routes / experienceRoute.js

const express =require('express')

const router = express.Router()
const experienceModel= require('../models/experienceModel')

router.get("/experience", async (req, res)=>{
    const experiences = await experienceModel.find()
    res.json(experiences)

})

router.post('/experience', async(req,res)=>{
    const experience = req.body
    const newExperience = await experienceModel.create(experience)
    res.json(newExperience)
    //res.json({message:`L'experience ${experience.name} a été ajoutée})
})

router.delete('/experience/:id', async(req,res)=>{
    const {id}= req.params
    //const id = req.params.id
    // const experience = await experienceModel.findById(id)

    await experienceModel.findByIdAndDelete(id)
    res.json({message:'une experience a été supprimée'})
})

module.exports = router