const Sequelize = require('sequelize')
const db = require('./database')

const CampusInfo = db.define('campus', {
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    imageUrl:{
        type: Sequelize.STRING,
        defaultValue:'campus_Img'
    },
    address:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    description:{
        type: Sequelize.STRING,

    }
})

module.exports = CampusInfo