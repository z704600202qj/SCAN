/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_help_about', {
    haid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING(666),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'yy_help_about'
  });
};
