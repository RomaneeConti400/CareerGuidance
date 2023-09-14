const {ProjectRequest} = require('../models/models');
const ApiError = require('../error/ApiError');

class ProjectRequestController {
  async create(req, res) {
    const {pr_id, user_id, prof_id, pr_req_date, pr_req_mentoring} = req.body
    const projectRequest = await ProjectRequest.create({pr_id, user_id, prof_id, pr_req_date, pr_req_mentoring})
    return res.json(projectRequest)
  }

  async getall(req, res) {
      const projectRequests = await ProjectRequest.findAll()
      return res.json(projectRequests)
  }
}

module.exports = new ProjectRequestController()