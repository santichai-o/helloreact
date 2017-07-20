import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    'test', 
    'root', 
    '',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)

const Contents = sequelize.define('contents', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Contents.sync({force: false}).then(function () {
  /* return Contents.create({
    title: 'test1',
    description: 'description description',
    xxx: ''
  }); */
});

export default sequelize