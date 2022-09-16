const { Campus, Student } = require('../db')
const router = require('express').Router()


router.get('/', async (req, res, next) => {
    try { 
        const campuses = await Campus.findAll({
        include: [Student]
        }); 
    res.send(campuses)
    } 
    catch (err) {next(err)}
})


router.get('/campuses/:id', async ( req, res, next) => {
    try {
    const params = req.params
    const campus = await Campus.findByPk(params.id)
    res.send(campus)
    }
    catch (err) {next(err)}
})

router.delete('/campuses/:id', async (req, res, next) => {

})

router.get('/add', async (req, res, next) => {

        // const newCampus = await Campus.create({
        //     name: 'name',
        //     imageUrl: 'N/a',
        //     address: 'address',
        //     description: ''
        // })
        try { 
            const campuses = await Campus.findAll({
            include: [Student]
            }); 
        res.send(campuses)
        } 
        catch (err) {next(err)}
})


module.exports = router