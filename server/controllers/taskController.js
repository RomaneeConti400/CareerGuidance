import {Task} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class TaskController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await Task.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await Task.findAll()
      return res.json(roles)
  }
}

export default new TaskController()