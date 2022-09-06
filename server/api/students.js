const { Campus, Student } = require('../db')

const router = require('express').Router()

// router.get('/', async (req, res, next) => {
//     try {
//         const campuses = await Campus.findAll({
//             include: [Student]
//         })
//         res.json(campuses)
//     } catch (err) { next(err) }
// })

module.exports = router