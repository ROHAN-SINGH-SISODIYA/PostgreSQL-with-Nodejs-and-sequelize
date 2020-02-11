'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title:{ 
      type:DataTypes.STRING,
      allowNull:false,
    },
    price:{
      type:DataTypes.STRING,
      allowNull:false,
    }, 
    description:{
      type:DataTypes.STRING,
      allowNull:false,
    },  
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};