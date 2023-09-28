const { Sequelize } = require("sequelize")

module.exports=(connection,DataTypes)=>{
    const groups= connection.define("groups",{
    
    name: {type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    members: {
        type: Sequelize.JSON,
      }
    } )
    return groups
    }