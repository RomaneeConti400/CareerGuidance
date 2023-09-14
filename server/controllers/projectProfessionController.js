const {ProjectProfession} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProjectProfessionController {
  async create(req, res) {
    const {pr_id, prof_id} = req.body
    const projectProfession = await ProjectProfession.create({pr_id, prof_id})
    return res.json(projectProfession)
  }

  async getall(req, res) {
      const projectProfession = await ProjectProfession.findAll()
      return res.json(projectProfession)
  }
}

module.exports = new ProjectProfessionController()