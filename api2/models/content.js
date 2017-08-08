export default function(sequelize, Sequelize) {
 
    const Content = sequelize.define('Content', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        title: {
            type: Sequelize.BIGINT,
            allowNull: false
        },

        description: {
            type: Sequelize.TEXT,
            allowNull: false
        }
 
    })

    /* Content.associate = function(models) {
        Content.hasMany(models.Message)
    } */
 
    return Content
 
}