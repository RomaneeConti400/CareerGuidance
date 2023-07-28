const {TestUser} = require('../models/models');
const ApiError = require('../error/ApiError');

class TestUserController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await TestUser.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await TestUser.findAll()
      return res.json(roles)
  }
}

module.exports = new TestUserController()