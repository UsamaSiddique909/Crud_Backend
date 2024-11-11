const express = require('express')
const app = express();
const db = require('./db.js')
const bodyParser = require('body-parser');
const { error } = require('console');
const { log } = require('console');


const bodyparse = bodyParser;

app.use(bodyparse.json())

app.get('/', (req, res)=>{
    res.send('Hello World from server')
})

// app.post('/person', (req, res)=>{
//     const data = req.body;

//     const newPerson = new Person(data)

//     newPerson.save((error, savedPerson) => {
//         if(error){
//             console.log(`Error in saving person data ${error}`)
//             res.status(500).json({error: 'Internal server error'})
//         }else{
//             console.log(`data successfull saved`)
//             res.status(200).json(savedPerson)
//         }
//     })
// })





// app.get('/user',(req, res)=>{
//     const userdetail = {
//         id: 1,
//         Name: "Usama Siddique",
//         email: "Usama@yopmail.com"


//     }
//     res.send(userdetail)
// })
// app.get('/signup',(req, res)=>{
//     res.send('Hello World from signup page')
// })
const personRouter = require('./Routes/Person.routes.js');
app.use('/person', personRouter)


const menuRoutes = require('./Routes/Menu.routes.js')
app.use('/menu', menuRoutes)


app.listen(3000, ()=>{
    console.log('Website is live')
})