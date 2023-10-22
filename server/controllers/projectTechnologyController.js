import {ProjectTechnology} from '../models/models.js'
import ApiError from '../error/ApiError.js'

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

export default new ProjectTechnologyController()