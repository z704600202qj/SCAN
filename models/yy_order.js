/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { User } = require('./yy_user')
const {Brand} = require('./yy_brand')

const {
  sequelize
} = require('../core/db')

class Order extends Model {
  static async List(size, page = 1, arg) {
    let data = await Order.findAndCountAll({
      where: { ...arg },
      include: [{
        model: User,
        as: 'User',
        attributes: ['userid'],
      },
      {
        model: Brand,
        as: 'Brand',
        attributes: ['brand_name'],
      }
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
  static async detail(id){
    let data = await Order.findOne({
      where:{
        oid:id
      },
      include: [{
        model: User,
        as: 'User',
      },
      {
        model: Brand,
        as: 'Brand',
      }
    ],
    })
    return data
  }
}
Order.init({
  oid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  bsgid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  userid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
  },
  order_num: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  num: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  payable: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  paid: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  is_pay: {
    type: DataTypes.ENUM('0', '1'),
    allowNull: false,
    defaultValue: '0'
  },
  flag: {
    type: DataTypes.ENUM('1', '2', '3', '4'),
    allowNull: false,
    defaultValue: '1'
  },
  cid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
}, {
  sequelize: sequelize,
  tableName: 'yy_order',
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})

Order.belongsTo(User, { foreignKey: 'userid', targetKey: 'userid' });
Order.belongsTo(Brand, { foreignKey: 'bsgid', targetKey: 'bid' });

module.exports = Order
