import {Technology} from '../models/models.js'
import ApiError from '../error/ApiError.js'
import { generatePublicId } from "../utils/public_id.js";

class TechnologyController {
  async create(req, res) {
    const {tech_name} = req.body
    const tech_id = generatePublicId()
    const tech = await Technology.create({tech_id, tech_name})
    return res.json(tech)
  }

  async getall(req, res) {
      const techs = await Technology.findAll()
      return res.json(techs)
  }
}

export default new TechnologyController()