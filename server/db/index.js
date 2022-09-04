// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')

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
        description: 'One of the best atheletic programs in college, famous for American Football. Was on the low, but is steadily becoming better.',
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