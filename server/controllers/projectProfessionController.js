const {ProjectProfession} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProjectProfessionController {
  async create(req, res) {
    const {prof_id} = req.body
    const profession = await ProjectProfession.create({prof_id})
    return res.json(profession)
  }

  async getall(req, res) {
      const projectProfession = await ProjectProfession.findAll()
      return res.json(projectProfession)
  }
}

module.exports = new ProjectProfessionController()