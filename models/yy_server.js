/* jshint indent: 2 */
const {
  DataTypes,
  Model
} = require('sequelize')

const {
  sequelize
} = require('../core/db')
class yy_server extends Model{
  static async getData(stid) {
    let data = await yy_server.findAll({where:{
      stid
    }})
    return data
  }
  static async createData(server_name, arg) {
    let data = await yy_server.create({
      server_name,
      ...arg
    })
    return data
  }
}
yy_server.init( {
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
},{
  tableName: 'yy_server',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_server
