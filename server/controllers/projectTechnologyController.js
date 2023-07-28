const {ProjectTechnology} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProjectTechnologyController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await ProjectTechnology.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await ProjectTechnology.findAll()
      return res.json(roles)
  }
}

module.exports = new ProjectTechnologyController()