const connection = require('../app/database')

class UserService {
  // 创建用户
  async create(user) {
    const { username, password } = user

    // 拼接statement
    const statement = 'INSERT INTO `user` (username,password) VALUES(?, ?);'

    // 执行SQL
    const [result] = await connection.execute(statement, [username, password])
    console.log('数据库操作成功')
    return result
  }
  // 查询用户名
  async findUserByName(username) {
    const statement = 'SELECT * FROM user WHERE username = ?'

    const [values] = await connection.execute(statement, [username])
    return values
  }
}
module.exports = new UserService()
