const {Project} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProjectController {
  async create(req, res) {
    const {pr_name, pr_descr, manager_id, memb_num, git_link, pr_deadline} = req.body
    const project = await Project.create({pr_name, pr_descr, manager_id, memb_num, git_link, pr_deadline})
    return res.json(project)
  }

  async getall(req, res) {
      const projects = await Project.findAll()
      return res.json(projects)
  }

  async getOne(req, res, next) {
      
  }
}

module.exports = new ProjectController()