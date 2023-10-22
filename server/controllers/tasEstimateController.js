import {TasEstimate} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class TasEstimateController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await TasEstimate.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await TasEstimate.findAll()
      return res.json(roles)
  }
}

export default new TasEstimateController()