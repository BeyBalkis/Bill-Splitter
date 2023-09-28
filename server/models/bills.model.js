module.exports=(connection,DataTypes)=>{
    const bills= connection.define("bills",{
    
    name: DataTypes.STRING,
    amount:DataTypes.INTEGER,
    paidBy:DataTypes.STRING,
    groupId:DataTypes.INTEGER
    } )
    return bills
    }
    
    