import { Request, Response } from "express";
import { UserModel } from "models";

class UserController {
  static async login(req: Request, res: Response) {
    // const { email, password: _ } = req.body;

    // const user = await UserModel.findOne({ email });
    return res.json({ message: "Hello" });
  }

  static async createUserAccount(req: Request, res: Response) {
    const userData = req.body;
    const newUser = await UserModel.create({ ...userData });

    return res.status(201).json({
      data: newUser,
    });
  }
}

export default UserController;
