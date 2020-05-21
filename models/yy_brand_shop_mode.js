/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_brand_shop_mode', {
    bsmid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    bsid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    receipt: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    account: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'yy_brand_shop_mode'
  });
};
