import {Profession} from '../models/models.js'
import ApiError from '../error/ApiError.js'

class ProfessionController {
  async create(req, res) {
    const {prof_name} = req.body
    const profession = await Profession.create({prof_name})
    return res.json(profession)
  }

  async getall(req, res) {
      const professions = await Profession.findAll()
      return res.json(professions)
  }
}

export default new ProfessionController()