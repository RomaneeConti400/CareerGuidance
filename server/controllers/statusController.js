const {Status} = require('../models/models');
const ApiError = require('../error/ApiError');

class StatusController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await Status.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await Status.findAll()
      return res.json(roles)
  }
}

module.exports = new StatusController()