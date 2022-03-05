

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const _models = require("../database/models");

class UserController {
  static async login(req, res) {
    const {
      email,
      password: _
    } = req.body;
    const user = await _models.UserModel.findOne({
      email
    });
    return res.json(user);
  }

  static async createUserAccount(req, res) {
    const userData = req.body;
    const newUser = await _models.UserModel.create({ ...userData
    });
    return res.status(201).json({
      data: newUser
    });
  }

}

const _default = UserController;
exports.default = _default;