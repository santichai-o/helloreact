import Sequelize from 'sequelize'

import config from '../../config.js'

const sequelize = new Sequelize(
    config.db.table, 
    config.db.username,
    config.db.password,
    {
        dialect: 'mysql',
        host: config.db.host
    }
)

// Users
const Users = sequelize.define('users', {
  name: {
    type: Sequelize.STRING
  },
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: false
  },
  remember_token: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Users.sync({force: false}).then(function () {
  /* return Users.create({
    name: 'admin',
    username: 'admin',
    email: 'santichai.o@gmail.com',
    password: '1234',
    bio: '',
    remember_token: ''
  }) */ 
})

// Contents
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
  }) */
})

export default sequelize