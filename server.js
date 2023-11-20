//express framework over node
const express = require('express')
const app = express()
//variable holding something from config folder, database file
const connectDB = require('./config/database')

//line of code is needed for any environment files to run
//config folder, environment file
//lets node know we want to/how to use env variables to use in our application
require('dotenv').config({path: './config/.env'})

//DB function is called to connect to DB w Mongoose
//*Set up connection in config/database.js
connectDB()

//using ejs view engine, can change to any front end framework
app.set('view engine', 'ejs')
//public folder hosts all of our static files - css, client-side js
app.use(express.static('public'))
//these two replace body parser - allow us to grab specific data out of the request
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// MEAL PLAN
app.get('/meal-plan', (req, res) => {
    res.render('meal-plan.ejs')
})



// GROCERY LIST
//get request responds with the rendering of <SPECIFIED>.ejs file
app.get('/grocery-list', (req, res) => {
    res.render('grocery-list.ejs')
})

app.post('/grocery-list', (req,res) => {
    console.log('testttiinnnngggg')
})



//using environment variable for port
//listen for server host
app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})  