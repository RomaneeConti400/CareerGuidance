import {ProjectRequest} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";

class ProjectRequestController {
  async create(req, res) {
    const {pr_id, user_id, prof_id, pr_req_date, pr_req_mentoring} = req.body
    const pr_req_id = generatePublicId()
    const projectRequest = await ProjectRequest.create({pr_req_id, pr_id, user_id, prof_id, pr_req_date, pr_req_mentoring})
    return res.json(projectRequest)
  }

  async getall(req, res) {
      const projectRequests = await ProjectRequest.findAll()
      return res.json(projectRequests)
  }
}

export default new ProjectRequestController()