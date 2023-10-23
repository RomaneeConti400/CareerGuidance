import {Task} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";

class TaskController {
  async create(req, res) {
    const {pr_id, tas_descr, tas_prior, tas_crdate, tas_deadline, tas_enddate, tas_status, tas_name } = req.body
    const tas_id = generatePublicId()
    const role = await Task.create({tas_id, pr_id, tas_descr, tas_prior, tas_crdate, tas_deadline, tas_enddate, tas_status, tas_name })
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await Task.findAll()
      return res.json(roles)
  }
}

export default new TaskController()