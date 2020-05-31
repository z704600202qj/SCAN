/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_server_type', {
    stid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    type: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: false,
      defaultValue: '1'
    },
    remark: {
      type: DataTypes.STRING(666),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'yy_server_type'
  });
};
