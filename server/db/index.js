// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')
// const { default: CampusList } = require('../../src/components/CampusList')

Campus.hasMany(Student)
Student.belongsTo(Campus)

const syncAndSeed = async () => {
    await db.sync({ force: true });

    //use this area to sync your database

    //campuses
      const nebraska = await Campus.create({
        name: 'Nebraska',
        imageUrl: 'N/a',
        address: '1234 Husker Street',
        description: 'Great athletic program, famous for American Football. Was on the low, but is steadily becoming better.',
    })
      const iowa = await Campus.create({
        name: 'Iowa',
        imageUrl: 'N/a',
        address: '1234 Hawkeye Street',
        description: 'A decent atheletic program on the college scene. Had a breakout year a few years ago, but has slowly declined recently.',
  })

    //students
      const abutterfield = await Student.create({
        firstName: 'Alec',
        lastName: 'Butterfield',
        email: 'alec.butterfield1@gmail.com',
        imageUrl: 'N/a',
        gpa: 3.8,

      })
    

    console.log(`
    Seeding successful!
  `);
};




module.exports = {
    Student,
    Campus,
    db,
    syncAndSeed,

}