const {User} = require('../../models/yy_user.js')

module.exports = {
  // 查询一条
  queryUserOne(username){
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          mobile: username
        }
      }).then((res) => {
        // 对数据进行处理
        let data = res
        resolve(data)
      }).catch((err) => {
        reject(err)
      });
    })
  },
  // 查询所有用户数据
  queryUserAll(){
    return new Promise((resolve, reject) => {
      User.findAll().then( res => {
        let data = res
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 增加一条
  addUser(params){
    return new Promise((resolve, reject) => {
      User.create(params).then( res => {
        let data = res
        console.log(data)
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 批量增加
  addUserBatch(params){
    return new Promise((resolve, reject) => {
      User.bulkCreate(params).then( res => {
        let data = res
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 修改一条
  updateUser(params){
    return new Promise((resolve, reject) => {
      User.update(params,{
        where: {id: params.id}
      }).then( res => {
        let data = res
        resolve(data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 删除一条
  deleteUser(id){
    return new Promise((resolve, reject) => {
      User.destroy({
        where: {
          id: String(id)
        }
      }).then( res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
 
}