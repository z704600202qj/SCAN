/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')
const { sequelize } = require('../core/db')
class yy_user_coupon extends Model {
  static async getData(userid) {
    let data = await yy_user_coupon.findAll({
      where: {
        userid
      }
    })
    return data
  }
  static async saveData(userid,cid) {
    let data = await yy_user_coupon.create({
      userid,
      cid
   })
    return data
  }
}
yy_user_coupon.init({
  ucid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  userid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  cid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  is_use: {
    type: DataTypes.ENUM('1','2'),
    allowNull: false,
    defaultValue: '1'
  },
}, {
  tableName: 'yy_user_coupon',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: 'update_time',
  deletedAt: false
})
module.exports = yy_user_coupon