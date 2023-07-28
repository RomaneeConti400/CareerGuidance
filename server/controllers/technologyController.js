const {Technology} = require('../models/models');
const ApiError = require('../error/ApiError');

class TechnologyController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await Technology.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await Technology.findAll()
      return res.json(roles)
  }
}

module.exports = new TechnologyController()