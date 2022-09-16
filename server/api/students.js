const { Campus, Student } = require('../db')
const router = require('express').Router()


// //Routes for Students
router.get('/students', async (req, res, next) => {
    try {
        const students = await Student.findAll({
            include: [Campus]
        });

        res.json(students)

    } catch (err) {next(err)}
})

router.get('/students/:id', async (req, res, next) => {
    try {
        const params  = req.params
        console.log (params)
        const student = await Student.findByPk(params.id)
        res.json(student)
    } catch (err) {next(err)}
})

router.get('/students/add', async (req, res, next) => {

    const newStudent = await Student.create({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email@gmail.com',
        imageUrl: 'imageUrl',
        gpa: 0.0
    })
    res.send(newStudent)
})

module.exports = router