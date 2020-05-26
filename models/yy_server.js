/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
const yy_server_param = require('./yy_server_param.js')
class yy_server extends Model {
  static async getData(stid) {
    let data = await yy_server.findAll({
      where: {
        stid
      }
    })
    return data
  }
  static async delData(sid) {
    let data = await yy_server.destroy({
      where: {
        sid
      }
    });
    let list = await yy_server_param.destroy({
      where: {
        sid
      }
    })
    if (data[0] === 0 && list[0] === 0) {
      throw new global.errs.NotFound('删除不成功')
    }
  }
  static async editData(sid, arg) {
    let data = await yy_server.update(arg, {
      where: {
        sid
      }
    })
    let list = await yy_server_param.update(arg, {
      where: {
        sid
      }
    })
    if (data[0] === 0) {
      throw new global.errs.NotFound('修改不成功')
    }
  }
  static async getDetail(sid) {
    let data = await yy_server.findAll({
      where: {
        sid
      }
    })
    let list = await yy_server_param.findAll({
      where: {
        sid
      }
    })
    return {
      desc: data[0],
      list
    }
  }
  static async createData(server_name, arg) {
    const { stid, fids, tabula, colours } = arg
    await sequelize.transaction(function (t) {
      // 在这里链接您的所有查询。 确保你返回他们。
      return yy_server.create({
        server_name,
        stid,
        fids
      }, { transaction: t })
        .then(function (user) {
          return yy_server_param.create({
            sid: user.sid,
            tabula,
            colours
          }, { transaction: t });
        });
    }).then(function (result) {
      // 事务已被提交
    }).catch(function (err) {
      // 事务已被回滚
    });

  }
}
yy_server.init({
  sid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  stid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  server_name: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  fids: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  }
}, {
  tableName: 'yy_server',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_server
