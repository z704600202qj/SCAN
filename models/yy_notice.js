/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_notice', {
    nid: {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'yy_notice'
  });
};
