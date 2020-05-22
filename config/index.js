module.exports = {
    database: {
        dbName: 'yinyin',
        host: '42.56.89.212',
        dialect: 'mysql',
        port: 3306,
        user: 'yinyin',
        password: 'yinyin123',
        logging: false,
        timezone: '+08:00',
    },
    security:{
        secretKey:"abcdefg",
        expiresIn:60*60*24*30
    }
}
