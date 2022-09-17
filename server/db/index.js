// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')
// const { default: CampusList } = require('../../src/components/CampusList')

Campus.hasMany(Student)
Student.belongsTo(Campus, {
  foreignKey: "set_campus"
})

const syncAndSeed = async () => {
    await db.sync({ force: true });

    //use this area to sync your database

    //campuses
      const nebraska = await Campus.create({
        name: 'Nebraska',
        imageUrl: 'https://1000logos.net/wp-content/uploads/2019/09/Nebraska-Cornhuskers-football-logo.jpg',
        address: '1234 Husker Street',
        description: 'Great athletic program, famous for American Football. Was on the low, but is steadily becoming better.',
    })
      const iowa = await Campus.create({
        name: 'Iowa',
        imageUrl: 'https://brand.uiowa.edu/sites/brand.uiowa.edu/files/styles/widescreen__768_x_432/public/2020-05/Tigerhawk-gold%20on%20black%402x.png?h=e39f7b2b&itok=QFZ_pyzZ/a',
        address: '1234 Hawkeye Street',
        description: 'A decent atheletic program on the college scene. Had a breakout year a few years ago, but has slowly declined recently.',
  })

    //students
      const abutterfield = await Student.create({
        firstName: 'Alec',
        lastName: 'Butterfield',
        email: 'alec.butterfield1@gmail.com',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Letter_A.svg/1200px-Letter_A.svg.png',
        gpa: 3.8,
        foreignKey: 'Nebraska'
      })

      const bgarner = await Student.create({
        firstName: 'Borgo',
        lastName: 'Garner',
        email: 'bgarner@gmail.com',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/LetterB.svg/640px-LetterB.svg.png',
        gpa: 2.6,
        foreignKey: 'Nebraska'
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