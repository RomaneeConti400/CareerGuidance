const {Role} = require('../models/models');

class RoleController {
  async create(req, res) {
    const {role_name} = req.body
    const type = await Role.create({role_name})
    return res.json(type)
  }

  async getall(req, res, next) {
      
  }
}

module.exports = new RoleController()