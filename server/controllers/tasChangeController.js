import {TasChange} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";

class TasChangeController {
  async create(req, res) {
    const {tasch_changedate, tas_id, tasch_descr, tasch_status} = req.body
    const tasch_id = generatePublicId()
    const tasChange = await TasChange.create({tasch_id, tasch_changedate, tas_id, tasch_descr, tasch_status})
    return res.json(tasChange)
  }

  async getall(req, res) {
      const tasChanges = await TasChange.findAll()
      return res.json(tasChanges)
  }
}

export default new TasChangeController()