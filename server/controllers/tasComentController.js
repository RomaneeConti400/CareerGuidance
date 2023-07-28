const {TasComent} = require('../models/models');
const ApiError = require('../error/ApiError');

class TasComentController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await TasComent.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await TasComent.findAll()
      return res.json(roles)
  }
}

module.exports = new TasComentController()