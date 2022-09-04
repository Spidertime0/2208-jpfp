const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('volleyball')
const { default: axios } = require('axios')
const { Router } = require('express')
const { Campus, Student } = require('./db')
const app = express()
//const Campus = require('../src')

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use(cors())
app.use(volleyball)

//this is where some things should go

//Route for Campuses
app.get('/campuses', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll({
            include: [Student]
        });
        res.json(campuses)

    } catch (err) {next(err)}
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

module.exports = app;

