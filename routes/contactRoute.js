// routes/contactRoute.js

const express = require('express')

const router = express.Router()

const contactSchema = require('../models/contactModel')

router.get ('/contact', async(req, res)=>{
    const contact =  await contactSchema.find() // recupere les donnees dans contact
    console.log(contact);
res.json(contact)
})

router.post ('/contact',async (req, res)=>{
    const newContact = req.body 
    await contactSchema.deleteOne()
    contactSchema.create(newContact)
    res.json(newContact)
   
} )




router.put ('/contact', )
router.delete ('/contact', )



module.exports = router
