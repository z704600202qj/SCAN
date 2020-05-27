/* jshint indent: 2 */
const {
  DataTypes,
  Model
} = require('sequelize')

const {
  sequelize
} = require('../core/db')
class yy_facility_device extends Model {
  static async getData(fid) {
    let data = await yy_facility_device.findAll({where:{
      fid
    }})
    return data
  }
  static async createData(fid,device, remark) {
    let data = await yy_facility_device.create({
      fid,
      device,
      remark
    })
    return data
  }
  static async editData(id, query) {
    let data = await yy_facility_device.update(query, {
      where: {
        fdid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('编辑不成功')
    }
  }
  static async delData(id) {
    let data = await yy_facility_device.destroy({
      where: {
        fdid: id
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('删除不成功')
    }
  }
}
yy_facility_device.init({
  fdid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fid: {
    type: DataTypes.INTEGER(11).UNSIGNED,
    allowNull: false,
    defaultValue: '0'
  },
  device: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  remark: {
    type: DataTypes.STRING(666),
    allowNull: false,
    defaultValue: ''
  }
},{
  tableName: 'yy_facility_device',
  sequelize: sequelize,
  timestamps: false,
})
module.exports = yy_facility_device
