
import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import config from '../../config.js'

const sequelize = new Sequelize(
    config.db.database, 
    config.db.username, 
    config.db.password, 
    {
        dialect: 'mysql',
        host: config.db.host
    }
)
    
let db = {}
 
fs
.readdirSync(__dirname)
.filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js")
})
.forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
})
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db)
    }
})
 
db.sequelize = sequelize
db.Sequelize = Sequelize
 
export default db