const mongoose = require('mongoose')

//function that allows me to connect to my DB using Mongoose
//this function must be called
//is called in server.js file
const connectDB = async () => {
  try {
    //process.env.DB_STRING is an environment variable
    const conn = await mongoose.connect(process.env.DB_STRING, {
      //This is now automatic and will break if kept
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

//function is getting exported to be able to be used elsewhere aka server.js
module.exports = connectDB