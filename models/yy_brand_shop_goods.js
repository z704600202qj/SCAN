/* jshint indent: 2 */
/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')
const yy_brand=require('./yy_brand')
const yy_brand_shop=require('./yy_brand_shop')
const yy_goods=require('./yy_goods')


class yy_brand_shop_goods extends Model {
  static async getData(size, page = 1, arg) {
    let data = await yy_brand_shop_goods.findAndCountAll({
      where: { ...arg },
      include: [{
        model: yy_brand,
        as: 'brand',
      },
      {
        model: yy_brand_shop,
        as: 'brand_shop',
      },
      {
        model: yy_goods,
        as: 'goods',
      },

      ],
      limit: size || 10,//返回个数
      offset: size * (page - 1) || 0,//起始位置,跳过数量
    })
    data.list = data.rows
    delete data.rows
    return {
      ...data,
      currentPage: page,
      pageSize: Math.ceil(data.count / size)
    }
  }
  static async createData(arg) {
    let data = await yy_brand_shop_goods.create({
      ...arg
    })
    return data
  }
}
yy_brand_shop_goods.init({
  bsgid: {
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
  bsid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  gid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
}, {
  tableName: 'yy_brand_shop_goods',
  sequelize: sequelize,
  timestamps: false,
})
yy_brand_shop_goods.belongsTo(yy_brand, { foreignKey: 'bid', targetKey: 'bid',as:'brand' });
yy_brand_shop_goods.belongsTo(yy_brand_shop, { foreignKey: 'bsid', targetKey: 'bsid' ,as:'brand_shop'});
yy_brand_shop_goods.belongsTo(yy_goods, { foreignKey: 'gid', targetKey: 'gid' ,as:'goods'});

module.exports = yy_brand_shop_goods
