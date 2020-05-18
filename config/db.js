const Sequelize = require('sequelize');

const dbConfig = {
  database: 'users',      // 数据库名
  username: 'postgres',   // 用户名
  password: '123456',     // 本地数据库密码
  host: 'localhost',      // 数据库服务器IP
  dialect: 'postgres'     // 数据库类型
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