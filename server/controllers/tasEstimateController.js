const {TasEstimate} = require('../models/models');
const ApiError = require('../error/ApiError');

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

module.exports = new TasEstimateController()