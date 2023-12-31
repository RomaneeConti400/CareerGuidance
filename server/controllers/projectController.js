import {Project} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";

class ProjectController {
  async create(req, res) {
    const {pr_name, pr_descr, manager_id, memb_num, git_link, pr_deadline} = req.body
    const pr_id = generatePublicId()
    const project = await Project.create({pr_id, pr_name, pr_descr, manager_id, memb_num, git_link, pr_deadline})
    return res.json(project)
  }

  async getall(req, res) {
      const projects = await Project.findAll()
      return res.json(projects)
  }

  async getOne(req, res, next) {
      
  }
}

export default new ProjectController()