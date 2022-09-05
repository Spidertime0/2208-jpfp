const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const { default: axios } = require('axios')
const { Router } = require('express')
const { Campus, Student } = require('./db')
const { default: CampusList } = require('../src/components/CampusList')
const { listCampuses } = require('../src/reducers/action-creators')
const app = express()
//const Campus = require('../src')

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

//this is where some things should go

//Route for Campuses
app.get('/campuses', async (req, res, next) => {
//     // store.dispatch(listCampuses)
//     // const store = store.getState();
//     // res.send(store)

//     res.sendFile(path.join(__dirname, '..', 'public','index.html'))

    try { 
          const campuses = await Campus.findAll({
           include: [Student]
        }); 
        res.json(campuses)
    } 
    catch (err) {next(err)}
})

//Route for Students
app.get('/students', async (req, res, next) => {
    try {
        const students = await Student.findAll({
            include: [Campus]
        });
        res.json(students)

    } catch (err) {next(err)}
})

//Base Route
app.get('/', (req, res, next) => {
    res.send('Hello')
})

module.exports = app;

