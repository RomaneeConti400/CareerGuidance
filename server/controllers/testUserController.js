import {TestUser} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";

class TestUserController {
  async create(req, res) {
    const {user_id, test_id, result_value} = req.body
    const tesus_id = generatePublicId()
    const role = await TestUser.create({tesus_id, user_id, test_id, result_value})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await TestUser.findAll()
      return res.json(roles)
  }
}

export default new TestUserController()