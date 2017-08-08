export default function(sequelize, Sequelize) {
 
    const User = sequelize.define('User', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        name: {
            type: Sequelize.BIGINT,
            allowNull: false
        },

        username: {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        bio: {
            type: Sequelize.STRING
        },

        remember_token: {
            type: Sequelize.STRING
        }
 
    })

    /* User.associate = function(models) {
        User.hasMany(models.Message)
    } */
 
    return User
 
}