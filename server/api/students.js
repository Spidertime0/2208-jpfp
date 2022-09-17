const { Campus, Student } = require('../db')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
    try {
        const students = await Student.findAll({
            include: [Campus]
        });

        res.send(students)

    } catch (err) {next(err)}
})

router.get('/:id', async (req, res, next) => {
    try {
        const params  = req.params
        const student = await Student.findByPk(params.id)
        res.send(student)
    } 
    catch (err) {next(err)}
})

router.delete('/delete/:id', async (req, res, next) => {
    try {
        const params = req.params
        
        await Student.destroy({
            where: {
                id: params.id
            }
        })
        res.send('Successfully Deleted')
    }
    catch (err) {next(err)}
})

router.get('/add', async (req, res, next) => {

    const newStudent = await Student.create({
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email@gmail.com',
        imageUrl: 'imageUrl',
        gpa: 0.0
    })
    res.send(newStudent)
})

router.post('/post/:id', async (req, res, next) => {
    try{
        const body = req.body
        await Student.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email
        })
        res.redirect('/students')
    }
    catch(err) {next(err)}
})

router.patch('/patch/:id', async (req, res, next) => {
    try{
        const params = req.params
        const body = req.body
        await Student.update({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email
        }, {
            where: {
                id: params.id
            }
        })
    }
    catch(err) {next(err)}
})

router.get('*', async (err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).send(err.message)
    })


module.exports = router