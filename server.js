const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let db,
dbConnectionStr = process.env.DB_STRING,
dbName = 'meal-plan-grocery-list-database'

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
        //to access grocery-list-collection in DB
        groceryListCollection = db.collection('entries')
}) 


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