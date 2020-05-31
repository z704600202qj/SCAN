/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
class yy_goods_facility extends Model {
  static async createData(data){
    return new Promise((resolve, reject) => {
      yy_goods_facility.bulkCreate(data).then( res => {
        let data = res
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
yy_goods_facility.init({
  gfid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  gid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  fid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  device_state: {
    type: DataTypes.ENUM('1','2','3'),
    allowNull: false,
    defaultValue: '1'
  }
}, {
  tableName: 'yy_goods_facility',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_goods_facility
