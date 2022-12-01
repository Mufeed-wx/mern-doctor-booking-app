const express = require('express')
const app = express()
require('dotenv').config()
const dbCofig = require('./config/dbConfig')
const port = process.env.PORT || 5000


app.listen(port, () => console.log('Node server started', port))