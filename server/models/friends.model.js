
module.exports=(connection,DataTypes)=>{
    const friends= connection.define("friends",{
    
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    } )
    return friends
    }
    