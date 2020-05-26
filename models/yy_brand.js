/* jshint indent: 2 */
const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../core/db')
const yy_brand_file = require('../models/yy_brand_file')
class yy_brand extends Model {
  static async getData(size, page = 1, arg) {
    let data = await yy_brand.findAndCountAll({
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
  static async createData(brand_name, arg) {
    await sequelize.transaction(function (t) {
      // 在这里链接您的所有查询。 确保你返回他们。
      return yy_brand.create({
        brand_name,
        ...arg
      }, { transaction: t })
        .then(function (user) {
          let arr = arg.list.map(item => {
            item.bid = user.bid
            return item
          })
          return yy_brand_file.bulkCreate(arr, { transaction: t })
        });
    }).then(function (result) {
      // 事务已被提交
    }).catch(function (err) {
      // 事务已被回滚
    });
  }
  static async editData(id, query) {
    const batchAmount = 100;//拆分粒度
   await yy_brand.update(query, {
      where: {
        bid: id
      }
    });
    await sequelize.transaction(transaction => {
      return query.list
    }).then(async updateArray => {//得到上一个事务返回的要更新的数据
      //事务拆分循环
      for (let i = 0; i < Math.ceil(updateArray.length / batchAmount); i++) {
        await sequelize.transaction(transaction => {
          let updateUserPromises = []
          for (var j = i * batchAmount; j < (i + 1) * batchAmount && j < updateArray.length; j++) {
            updateUserPromises.push(
              yy_brand_file.update(updateArray[j], { where: { bfid: updateArray[j].bfid }, transaction })
            )
          }
          return Promise.all(updateUserPromises)
        })
      }
    })

  }
  static async delData(id) {
    let data = await yy_brand.destroy({
      where: {
        bid: id
      }
    });
    await yy_brand_file.destroy({
      where: {
        bid: id
      }
    })
    if (data[0] === 0) {
      throw new global.errs.NotFound('删除失败')
    }
  }
}
yy_brand.init({
  bid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  brand_name: {
    type: DataTypes.STRING(64),
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
  }
}, {
  tableName: 'yy_brand',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: false,
  deletedAt: false
})
module.exports = yy_brand