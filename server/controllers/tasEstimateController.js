import {TasEstimate} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";

class TasEstimateController {
  async create(req, res) {
    const {tas_id, user_id, tasesti_mark, tasesti_deadline} = req.body
    const tasesti_id = generatePublicId()
    const role = await TasEstimate.create({tasesti_id, tas_id, user_id, tasesti_mark, tasesti_deadline})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await TasEstimate.findAll()
      return res.json(roles)
  }
}

export default new TasEstimateController()