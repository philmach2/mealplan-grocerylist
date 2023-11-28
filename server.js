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
        groceryListCollection = db.collection('grocery-list-collection')
        mealPLanCollection = db.collection('meal-plan-collection')

    // MEAL PLAN
    app.get('/meal-plan', (req, res) => {
        db.collection('meal-plan-collection')
            .find()
            .toArray()
            .then(results => {
                console.table(results)
                res.render('meal-plan.ejs', { mealPlanStuff: results })
            })
            .catch(error => console.error(error))

        // res.render('meal-plan.ejs')
    })

    app.post('/meal-plan-form', (req, res) => {
        mealPLanCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/meal-plan')
            })
            .catch(error => console.error(error))
    })


    // GROCERY LIST
    app.get('/grocery-list', (req, res) => {
        groceryListCollection.find().toArray()
        .then(results => {
            res.render('grocery-list.ejs', { groceryListItems: results })
        })
        .catch(error => console.error(error))
    })

    app.post('/addGrocery', (req,res) => {
        groceryListCollection.insertOne(req.body)
        .then(results => {
            res.redirect('/grocery-list')
        })
        .catch(error => console.error(error))
    })

    // need to figure out how to add num and sub num of items, both for db and page
    app.put('/addNum', (req, res) => {
        console.log('Received PUT request:', req.body);
        groceryListCollection.updateOne(
            { itemName: req.body.itemName },
            { $set: { numItem: Number(req.body.numItem) + 1 } },
        )
        .then(result => {
            console.log('Increased Number of Item')
            res.json('Number of Item Increased')
        })
        .catch(error => console.error(error))
    
    })

    // I want a place to put the number in ejs
    // I want a put request sent to the number to be applied and increased
    // If it is 2 or greater, I want it to appear on screen, less than hidden

    // SERVER CONNECT
    app.listen(process.env.PORT, () => {
        console.log('Server is running, you better catch it!')
    })  
}) 
.catch(console.error)