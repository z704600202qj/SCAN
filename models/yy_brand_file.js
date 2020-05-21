/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_brand_file', {
    bfid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    file_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    describe: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'yy_brand_file'
  });
};
