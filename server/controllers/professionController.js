const {Profession} = require('../models/models');
const ApiError = require('../error/ApiError');

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

module.exports = new ProfessionController()