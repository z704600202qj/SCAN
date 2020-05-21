/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_help', {
    hid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    result: {
      type: DataTypes.STRING(666),
      allowNull: false,
      defaultValue: ''
    },
    is_show: {
      type: DataTypes.ENUM('1','2'),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'yy_help'
  });
};
