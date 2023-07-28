const {TasChange} = require('../models/models');
const ApiError = require('../error/ApiError');

class TasChangeController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await TasChange.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await TasChange.findAll()
      return res.json(roles)
  }
}

module.exports = new TasChangeController()