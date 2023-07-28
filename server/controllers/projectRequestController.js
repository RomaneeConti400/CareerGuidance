const {ProjectRequest} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProjectRequestController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await ProjectRequest.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await ProjectRequest.findAll()
      return res.json(roles)
  }
}

module.exports = new ProjectRequestController()