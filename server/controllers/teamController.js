const {Team} = require('../models/models');
const ApiError = require('../error/ApiError');

class TeamController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await Team.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await Team.findAll()
      return res.json(roles)
  }
}

module.exports = new TeamController()