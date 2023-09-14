const {Role} = require('../models/models');
const ApiError = require('../error/ApiError');

class RoleController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await Role.create({role_name})
    return res.json(role)
  }
}

module.exports = new RoleController()