"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    passwordDigest: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return User;
};
