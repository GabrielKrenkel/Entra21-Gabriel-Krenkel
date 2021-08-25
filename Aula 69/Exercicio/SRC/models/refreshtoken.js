'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Refreshtoken extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: {
          type: DataTypes.STRING,
          name: "user_email"
        },
        as: "user"
      });
    }
  };
  Refreshtoken.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expireses_in: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Refreshtoken',
  });
  return Refreshtoken;
};