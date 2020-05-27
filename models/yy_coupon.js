/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
class yy_coupon extends Model {
  static async getData(size, page = 1, arg) {
    let data = await yy_coupon.findAndCountAll({
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

static async getDetail(cid){
  let data = await yy_coupon.findOne({
    where: {
      cid
    }
  })
  return data
}
  static async createData(redeem, arg) {
    let data = await yy_coupon.create({
      redeem,
      ...arg
    })
    return data
  }
  static async editData(id, query) {
    let data = await yy_coupon.update(query, {
      where: {
        cid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('修改不成功')
    }
  }
  static async status(id, status) {
    console.log(id,{status:status})
    let data = await yy_coupon.update({status:status}, {
      where: {
        cid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('修改不成功')
    }
  }
  static async delData(id) {
    let data = await yy_coupon.destroy({
      where: {
        cid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('cid不存在')
    }
  }
}
yy_coupon.init({
  cid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  redeem: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  type: {
    type: DataTypes.ENUM('1', '2', '3'),
    allowNull: false,
    defaultValue: '1'
  },
  reduct: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  subtract: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  rebate: {
    type: DataTypes.INTEGER(3).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  cash: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    defaultValue: '0.00'
  },
  start_time: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: '0000-00-00 00:00:00'
  },
  end_time: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: '0000-00-00 00:00:00'
  },
  num: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  flag: {
    type: DataTypes.ENUM('1', '2'),
    allowNull: false,
    defaultValue: '1'
  },
  sig: {
    type: DataTypes.ENUM('1', '2'),
    allowNull: false,
    defaultValue: '1'
  },
  state: {
    type: DataTypes.ENUM('1', '2'),
    allowNull: false,
    defaultValue: '1'
  },
  remark: {
    type: DataTypes.STRING(666),
    allowNull: false,
    defaultValue: ''
  },
}, {
  tableName: 'yy_coupon',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})
module.exports = yy_coupon