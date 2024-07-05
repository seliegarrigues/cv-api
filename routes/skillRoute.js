//routes/skillRoute.js

const express= require('express')
const router= express.Router()

const skillModel = require('../models/skillModel')
router.get ('/skill', async (req,res)=>{
    const skill= await skillModel.find()
    console.log(skill);
    res.json(skill)
    
})

router.post('/skill',async (req,res)=>{
    const newSkill = req.body
    console.log(newSkill);
    await skillModel.create(newSkill)
    // res.json(newSkill)
    res.json({message:`The skill ${newSkill.skill} has been added`})

})
router.delete('/skill/:id', async(req,res)=>{
    const {id}= req.params
    //  const skill = await skillModel.findById(id)

    await skillModel.findByIdAndDelete(id)
    res.json({message : id})
})

module.exports = router