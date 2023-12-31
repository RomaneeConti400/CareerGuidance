import { Role } from "../models/models.js"
import ApiError from "../error/ApiError.js"
import { generatePublicId } from "../utils/public_id.js";

class RoleController {
  async create(req, res) {
    const { role_name } = req.body;
    const role_id = generatePublicId()
    const role = await Role.create({role_id, role_name });
    return res.json(role);
  }
  async getall(req, res) {
    const roles = await Role.findAll();
    return res.json(roles);
  }
  async getbyid(req, res) {
    const role_id = req.params.id;
    const role = await Role.findOne({ where: { role_id } });
    const roleName = role.role_name;
    return res.json(roleName);
  }
}

export default new RoleController();
