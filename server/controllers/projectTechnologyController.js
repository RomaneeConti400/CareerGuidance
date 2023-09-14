const {ProjectTechnology} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProjectTechnologyController {
  async create(req, res) {
    const {pr_id, tech_id} = req.body
    const projectTechnology = await ProjectTechnology.create({pr_id, tech_id})
    return res.json(projectTechnology)
  }

  async getall(req, res) {
      const projectTechnologys = await ProjectTechnology.findAll()
      return res.json(projectTechnologys)
  }
}

module.exports = new ProjectTechnologyController()