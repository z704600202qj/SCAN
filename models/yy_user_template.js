/* jshint indent: 2 */
const { DataTypes, Model } = require('sequelize')

const { sequelize } = require('../core/db')

class yy_user_template extends Model {
  static async getData(userid) {
    let data = await yy_user_template.findAll({
      where: {
        userid
      }
    })
    return data
  }

  static async createData(userid,bill_type, arg){
    await yy_server.create({
      userid,
      bill_type,
      ...arg
    })
  }
  
  static async editData(utid, arg){
    let data = await yy_user_template.update(arg, {
      where: {
        utid
      }
    });
    if (data[0] === 0) {
      throw new global.errs.NotFound('修改不成功')
    }
  }
  
  static async delData(utid) {
    let data = await yy_user_template.destroy({
      where: {
        utid
      }
    });
  
    if (data[0] === 0 ) {
      throw new global.errs.NotFound('删除不成功')
    }
  }
}
yy_user_template.init( {
  utid: {
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
  bill_type: {
    type: DataTypes.ENUM('1','2'),
    allowNull: false,
    defaultValue: '1'
  },
  taxation: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  bill_mode: {
    type: DataTypes.ENUM('1','2'),
    allowNull: false,
    defaultValue: '1'
  },
  realname: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  city: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  county: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  town: {
    type: DataTypes.STRING(64),
    allowNull: false,
    defaultValue: ''
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false,
    defaultValue: ''
  },
  email: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
  mobile: {
    type: DataTypes.STRING(18),
    allowNull: false,
    defaultValue: ''
  },
  bar_type: {
    type: DataTypes.ENUM('1','2','3'),
    allowNull: false,
    defaultValue: '1'
  },
  bar_code: {
    type: DataTypes.STRING(32),
    allowNull: false,
    defaultValue: ''
  },
}, {
  tableName: 'yy_user_template',
  sequelize: sequelize,
  timestamps: true,
  createdAt: 'create_time',
  updatedAt: 'update_time',
  deletedAt: 'delete_time',
})
module.exports = yy_user_template
