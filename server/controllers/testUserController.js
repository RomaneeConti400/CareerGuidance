import {TestUser} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class TestUserController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await TestUser.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await TestUser.findAll()
      return res.json(roles)
  }
}

export default new TestUserController()