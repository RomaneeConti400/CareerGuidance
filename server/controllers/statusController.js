import {Status} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";
class StatusController {
  async create(req, res) {
    const {stat_name} = req.body
    const stat_id = generatePublicId()
    const status = await Status.create({stat_id, stat_name})
    return res.json(status)
  }

  async getall(req, res) {
      const statuses = await Status.findAll()
      return res.json(statuses)
  }
}

export default new StatusController()