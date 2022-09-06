const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const { default: axios } = require('axios')
const { Router } = require('express')
const { Campus, Student } = require('./db')
// const { default: CampusList } = require('../src/components/CampusList')
const { addCampus } = require('../src/reducers/actions')
const app = express()
//const Campus = require('../src')

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

//this is where some things should go

//Routes for Campuses
app.get('/campuses', async (req, res, next) => {

    try { 
          const campuses = await Campus.findAll({
           include: [Student]
        }); 

        res.json(campuses)
    } 
    catch (err) {next(err)}
})

app.get('/campuses/:id', async ( req, res, next) => {
    try {
    const params = useParams()
    const campus = await Campus.findOne()
    }
    catch (err) {next(err)}
})

app.delete('/campuses/:id', async (req, res, next) => {
})

// //Route for Students
app.get('/students', async (req, res, next) => {
    try {
        const students = await Student.findAll({
            include: [Campus]
        });

        res.json(students)

    } catch (err) {next(err)}
})

app.get('/students/:id', async (req, res, next) => {
    try {
        const { params } = useParams()
        console.log (params)
        const student = await Student.findByPK(params.id)({
            include: [Campus]
        })
        res.json(student)
    } catch (err) {next(err)}
})

//Base Route
app.get('/', (req, res, next) => {
    res.send('Welcome')
})

module.exports = app;

