 //import { DefaultDeserializer } from 'v8';

const mongoose = require('mongoose')

const mongooseURL = 'mongodb://localhost:27017/myUsers'

mongoose.connect(mongooseURL)

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("Connected to MongoDB")
})
db.on('error', (err)=>{
    console.log("Something issue on MongoDB")
})
db.on('Disconnected', ()=>{
    console.log("Disconnect to MongoDB")
})

module.exports = db;