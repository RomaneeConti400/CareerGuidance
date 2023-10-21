import {Team} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class TeamController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await Team.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await Team.findAll()
      return res.json(roles)
  }
}

export default new TeamController()