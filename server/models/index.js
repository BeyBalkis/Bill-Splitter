const { Sequelize , DataTypes} = require('sequelize');

const connection = new Sequelize('billsplit', 'root', 'root', {
    host: 'localhost',
    dialect: "mysql"
  });

  try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  const Friends=require("./friends.model")(connection,DataTypes)
  const Groups=require("./groups.model")(connection,DataTypes)
  const Bills=require("./bills.model")(connection,DataTypes)
  const FriendsGroup = connection.define('FriendsGroup', {});

  // connection.sync({ alter: true })
  // .then(() => console.log("tables are created"))
  // .catch((err) => console.log(err))


  const db={}
  db.Friends=Friends
  db.Groups=Groups
  db.Bills=Bills



  Friends.belongsToMany(Groups, { through: FriendsGroup });
  Groups.belongsToMany(Friends, { through: FriendsGroup });
  Groups.hasMany(Bills)
  Bills.belongsTo(Groups)


  module.exports=db