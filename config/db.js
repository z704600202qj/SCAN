const Sequelize = require('sequelize');

const dbConfig = {
  database: 'yinyin',      // 数据库名
  username: 'yinyin',   // 用户名
  password: 'yinyin123',     // 本地数据库密码
  host: '42.56.89.212',      // 数据库服务器IP
  dialect: 'mysql'     // 数据库类型
}

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect, //数据库类型(这里使用postgres)
    // 设置时区
    timezon: '+08:00',
    define: {
      timestamps: false //为模型添加 createdAt 和 updatedAt 两个时间戳字段（true or false）
    },
    pool: { //使用连接池连接，默认为true
      max: 50,
      min: 0,
      idle: 30000
    },
  }
)

module.exports = sequelize;