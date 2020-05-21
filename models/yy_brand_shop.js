/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yy_brand_shop', {
    bsid: {
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
    shop_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ''
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    lon: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    lat: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ''
    },
    thumb_path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    remark: {
      type: DataTypes.STRING(666),
      allowNull: false,
      defaultValue: ''
    },
    sig: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: false,
      defaultValue: '1'
    },
    is_bold: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: '0'
    },
    create_time: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'yy_brand_shop'
  });
};
