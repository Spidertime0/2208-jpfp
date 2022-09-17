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


router.get('/:id', async ( req, res, next) => {
    try {
    const params = req.params
    const campus = await Campus.findByPk(params.id)
    res.send(campus)
    }
    catch (err) {next(err)}
})

router.patch('/patch/:id', async (req, res, next) => {
    try {
        const params = req.params
        const body = req.body
        console.log(params, body)
        await Campus.update({
            name: body.name,
            address: body.address
        }, {
            where: {
                id: params.id
            }
        })
    }
    catch (err) {next(err)}
})

router.delete('/delete/:id', async (req, res, next) => {
    try{
        const params = req.params
        await Campus.destroy({
            where: {
                id: params.id
            }
        })
        res.send('Successfully Deleted')
    }
    catch (err) {next(err)}
})

router.get('/add', async (req, res, next) => {

        try { 
            const campuses = await Campus.findAll({
            include: [Student]
            }); 
        res.send(campuses)
        } 
        catch (err) {next(err)}
})


module.exports = router