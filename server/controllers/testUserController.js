import { TestUser, User } from "../models/models.js";
import ApiError from "../error/ApiError.js";
import { generatePublicId } from "../utils/public_id.js";

class TestUserController {
  async create(req, res) {
    const { user_id, test_id, result_value } = req.body;
    const tesus_id = generatePublicId();
    const result = await TestUser.create({
      tesus_id,
      user_id,
      test_id,
      result_value,
    });
    return res.json(result);
  }

  async getall(req, res) {
    const results = await TestUser.findAll();
    return res.json(results);
  }

  async getbytestid(req, res) {
    const test_id = req.params.id;
    const user_id = req.user.user_id;
    const result = await TestUser.findOne({
      where: {
        test_id,
        user_id,
      },
    });
    return res.json(result);
  }
}

export default new TestUserController();
