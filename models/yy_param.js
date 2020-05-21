/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_param', {
    pid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    param_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    remark: {
      type: DataTypes.STRING(666),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'yy_param'
  });
};
