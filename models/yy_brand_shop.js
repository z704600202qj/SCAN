/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')
const yy_brand_shop_mode = require('./yy_brand_shop_mode')
const yy_brand = require('./yy_brand')
const yy_mode = require('./yy_mode')

class yy_brand_shop extends Model {

  static async getData(size, page = 1, arg) {
    let data = await yy_brand_shop.findAndCountAll({
      where: { ...arg },
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
  static async detail(id) {
    let data1 = await yy_brand_shop.findOne({
      where: {
        bsid: id
      },
      include: [{
        model: yy_brand,
        as: 'brand',
      },
    ],
    })
    let data2 = await yy_brand_shop_mode.findOne({
      where: {
        bsid: id
      }
    })
    let data3 =  await yy_mode.findOne({
      where: {
        mid: data2.mids
      }
    })
    return {
      desc:data1,
      pay:data3
    }
  }
  static async createData(bid, arg) {
    let data1 = await yy_brand_shop.create({ bid, ...arg })
    let data2 = await yy_mode.create({ pay_name: 'linepay', ...arg })
    await yy_brand_shop_mode.create({ bsid: data1.bsid, mids: data2.mid })
  }

  static async editData(id, query) {
    await yy_brand_shop.update(query, {
      where: {
        bsid: id
      }
    })
    let data = await yy_brand_shop_mode.findOne({
      where: {
        bsid: id
      }
    })
    await yy_mode.update(query, {
      where: {
        mid: data.mids
      }
    })
  }
  static async delData(id) {
    let data = await yy_brand_shop.destroy({
      where: {
        bsid: id
      }
    });
    let res = await yy_brand_shop_mode.findOne({
      where: {
        bsid: id
      }
    })
    await yy_brand_shop_mode.destroy({
      where: {
        bsid: id
      }
    })
    await yy_mode.destroy({
      where: {
        mid: res.mids
      }
    })

    if (data[0] === 0) {
      throw new global.errs.NotFound('删除失败')
    }
  }
}
yy_brand_shop.init({
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
  is_bold: {
    type: DataTypes.ENUM('0', '1'),
    allowNull: false,
    defaultValue: '0'
  },
  sig: {
    type: DataTypes.ENUM('1', '2', '3'),
    allowNull: false,
    defaultValue: '1'
  },
}, {
  tableName: 'yy_brand_shop',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})

yy_brand_shop.belongsTo(yy_brand, { foreignKey: 'bid', targetKey: 'bid',as:'brand' });

module.exports = yy_brand_shop