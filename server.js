const express = require('express')
const app = express()
const connectDB = require('./config/database')
require('dotenv').config({path: './config/.env'})
//DB function is called to connect to DB w Mongoose
//*Set up connection in config/database.js
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// MEAL PLAN
app.get('/meal-plan', (req, res) => {
    res.render('meal-plan.ejs')
})



// GROCERY LIST
app.get('/grocery-list', (req, res) => {
    res.render('grocery-list.ejs')
})

app.post('/grocery-list', (req,res) => {
    console.log(req.body)
})



// Server Connect
app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})  