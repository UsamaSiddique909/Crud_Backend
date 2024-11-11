const express = require('express');
const Person = require('../models/Person');
const router = express.Router();
const person =  require('../models/Person.js')
const { error } = require('console');

router.post('/', async (req, res)=>{
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved')
        res.status(200).json(response)
    }
        
     catch (error) {
        console.log(error)
        res.status(500).json({err: 'Internal Serval Error'})
        
    }
   
})

router.get('/', async(req, res)=>{
    try {
        const data = await Person.find();
        console.log('data fetched')
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(500).json({err: 'Internal Server Error'})
        
    }
})

router.get('/:workType',  async(req, res)=>{
try {
    
    const workType = req.params.workType;
    if(workType == 'Student' || workType == 'Teacher' || workType == 'Admin')
    {
        const response = Person.find({work: workType})
        console.log('Response Fetched')
        res.status(200).json(response)
    }else{
        res.status(404).json({error: 'Person Not Found'})
    }
     
} catch (error) {
    console.log(error)
     res.status(500).json({error: 'Internal Server Error'})
}

})

router.put('/:person_id', async (req,res)=>{
    try {
      
        const personId = req.params.person_id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
            new: true,
            runValidators: true,
        })
        if(!response){
            return res.status(404).json({error: 'Person not Found'})
        }
        console.log("data updated")
        res.status(200).json(response)

    } catch (error) {
        
    }
})

router.delete('/:person_id', async(req, res)=>{
 
    try {
        const personId = req.params.id;

        const response = await Person.findOneAndDelete(personId)
        console.log('User Deleted')
        res.status(200).json({message: 'User Deleted Successfully'})

        if(!response){
            return res.status(404).json({error: 'User is not found'})

        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal Server Error'})
        
    }
})


module.exports = router;

