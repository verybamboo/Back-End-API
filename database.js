let mongoose = require('mongoose');

const DATABASE_NAME = 'project-api'

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE_NAME}`, mongooseConfig)

mongoose.connection.on('connected', () => console.log("Connected to database"))
mongoose.connection.on('disconnected', () => console.log("Disconnected from database"))
mongoose.connection.on('error', error => console.error("Database error\n", error))