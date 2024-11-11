const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    workType:{
        type: String,
        enum: ['chef', 'manager', 'waiter']
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }

})

const Menu = mongoose.model('Menu', menuSchema)
module.exports = Menu;