const express = require('express')
const routes = express.Router();
const Menu = require('../models/Menu.model.js');


routes.post('/', async(req, res)=>{
    try {
        const data = req.body
        const newMenu = new Menu(data)

        const menuResponse = await newMenu.save()
        console.log(menuResponse)
        res.status(200).json({menuResponse: 'Menu Record Is Saved'})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({err: 'Internval Server Error'})
        
    }

})

routes.get('/', async(req, res)=>{
    try {
        const data = await Menu.find()
        console.log('data fetched in menu')
        res.status(200).json(data)
        
        
    } catch (error) {
        console.log(error)
        res.status(500).json({err: 'Internal Server Error'})
        
    }

})

routes.get('/:workType', (req, res)=>{
    try {

        
    const workType = req.params.workType;
    if(workType == 'chef' || workType == 'manager', workType == 'waiter'){
        const response = Menu.find({work: workType})
        console.log("Data Fetched in menu")
        res.status(200).json(response)
    }
       
} catch (error) {
        console.log(error)
        res.status(500).json({err: 'Internal Serval Error'})
        
    }

})

module.exports = routes;