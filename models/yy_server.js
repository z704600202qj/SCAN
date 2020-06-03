/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
const yy_server_param = require('./yy_server_param.js')
const yy_server_type = require('./yy_server_type.js')
class yy_server extends Model {
  static async getData(stid) {
    let data = await yy_server.findAll({
      where: {
        stid
      }
    })
    return data
  }
  static async getPgeData(size, page = 1, arg) {
    let data = await yy_server.findAndCountAll({
      where: { ...arg },
      include: [{
        model: yy_server_type,
        as: 'server_type',
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
  static async editData(sid, spid, arg) {
    let data = await yy_server.update(arg, {
      where: {
        sid
      }
    })
    let list = await yy_server_param.update(arg, {
      where: {
        spid
      }
    })
    if (data[0] === 0 && list[0] === 0) {
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
      // 在这里链接您的所有查询。 确保你返回他们。
      await yy_server.create({
        server_name,
        stid,
      })
      await  yy_server_param.create({
        sid: user.sid,
        tabula,
        colours
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
}, {
  tableName: 'yy_server',
  sequelize: sequelize,
  timestamps: false,
})
yy_server.belongsTo(yy_server_type, { foreignKey: 'stid', targetKey: 'stid', as: 'server_type' });

module.exports = yy_server
