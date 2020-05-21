/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_param_prop', {
    ppid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    pkey: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    pvalue: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    extend: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'yy_param_prop'
  });
};
