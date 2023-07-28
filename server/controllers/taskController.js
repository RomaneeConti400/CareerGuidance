const {Task} = require('../models/models');
const ApiError = require('../error/ApiError');

class TaskController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await Task.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await Task.findAll()
      return res.json(roles)
  }
}

module.exports = new TaskController()