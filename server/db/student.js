const Sequelize = require('sequelize')
const db = require('./database')

const Student = db.define('student',{
    firstName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    email:{
        type: Sequelize.STRING,
        validate:{
            isEmail: true
        }
    },
    imageUrl:{
        type: Sequelize.STRING,
        defaultValue:'student_img'
    },
    gpa:{
        type: Sequelize.FLOAT,
    },
    foreignKey: {
        type: Sequelize.STRING,
        defaultValue:'No set campuses!'
    }
})


module.exports = Student;