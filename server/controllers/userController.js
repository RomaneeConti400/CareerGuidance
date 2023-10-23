import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../models/models.js"
import ApiError from "../error/ApiError.js"
import { generatePublicId } from "../utils/public_id.js";

const generateJwt = (user_id, user_email, role_id) => {
  return jwt.sign({ user_id, user_email, role_id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const {user_login, user_password, role_id, user_name, user_education, user_email, user_adr, user_rating } = req.body;
    const user_id = generatePublicId()
    if (!user_email || !user_password) {
      return next(ApiError.badRequest("Incorrect email or password"));
    }
    const candidate = await User.findOne({ where: { user_email } });
    if (candidate) {
      return next(ApiError.badRequest("A user with this email already exists"));
    }
    const hashPassword = await bcrypt.hash(user_password, 5);
    const user = await User.create({ user_id,  user_login,  role_id, user_name, user_education, user_email, user_adr, user_rating, user_password: hashPassword });
    const token = generateJwt(user.user_id, user.user_email, user.role_id);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { user_email, user_password } = req.body;
    const user = await User.findOne({ where: { user_email } });
    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(user_password, user.user_password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.user_id, user.user_email, user.role_id);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(
      req.user.user_id,
      req.user.user_email,
      req.user.role_id
    );
    return res.json({ token });
  }

  async getinfo(req, res, next) {
    const user_id = req.user.user_id;
    if (user_id) {
      let user = await User.findOne({ where: { user_id } });
      return res.json(user);
    } else return next(ApiError.internal("Данные пользователя неверны"));
  }
}

export default new UserController();
