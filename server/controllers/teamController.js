import {Team} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";

class TeamController {
  async create(req, res) {
    const {user_id, pr_id, prof_id, mentor_id} = req.body
    const team_id = generatePublicId()
    const role = await Team.create({team_id, user_id, pr_id, prof_id, mentor_id})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await Team.findAll()
      return res.json(roles)
  }
}

export default new TeamController()