const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

//this is where some things should go

app.use('/api/campuses', require('./api/campuses'))
app.use('/api/students', require('./api/students'))


app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', 'public', 'index.html'))
  })

//Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).send(err.message)
})

module.exports = app;

