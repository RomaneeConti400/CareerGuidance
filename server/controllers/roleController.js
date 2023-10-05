const { Role } = require("../models/models");
const ApiError = require("../error/ApiError");

class RoleController {
  async create(req, res) {
    const { role_name } = req.body;
    const role = await Role.create({ role_name });
    return res.json(role);
  }
  async getall(req, res) {
    const roles = await Role.findAll();
    return res.json(roles);
  }
  async getbyid(req, res) {
    const role_id = req.body;
    const roleName = await Role.findOne({ where: { role_id } });
    return res.json(roleName);
  }
}

module.exports = new RoleController();
