/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_user', {
    userid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nickname: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    mobile: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: ''
    },
    is_freeze: {
      type: DataTypes.ENUM('1','2'),
      allowNull: false,
      defaultValue: '1'
    },
    create_time: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'yy_user'
  });
};
