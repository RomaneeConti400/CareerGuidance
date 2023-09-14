const {Test} = require('../models/models');
const ApiError = require('../error/ApiError');


class TestController {
  async create(req, res) {
    const {role_name} = req.body
    const role = await Test.create({role_name})
    return res.json(role)
  }

  async getall(req, res) {
      const roles = await Test.findAll()
      return res.json(roles)
  }
}

module.exports = new TestController()