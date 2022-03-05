import { Request, Response } from 'express';
import { generateToken } from '@helpers/jwt';
import { UserModel } from '@models';
import * as statusCodes from '@constants/statusCodes';
import jsonResponse from '@helpers/jsonResponse';

/**
 * A class to handle user authentication
 */
class UserController {
  /**
   * @param  {Response}  req
   * @param  {object} res
   * @returns {Promise<Response>} -
   */
  static async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user && (await user.isValidPassword(password))) {
      const token = generateToken({ id: user.id, firstName: user.firstName, lastName: user.lastName });

      return jsonResponse({ status: statusCodes.HTTP_OK, token, res });
    }

    return jsonResponse({ status: statusCodes.HTTP_BAD_REQUEST, message: 'Invalid user credentials', res });
  }

  /**
   * @param  {object}  req
   * @param  {object} res
   * @returns {Promise<Response>} - Json response
   */
  static async createUserAccount(req: Request, res: Response): Promise<Response> {
    const userData = req.body;
    // validate duplicate accounts

    const existingUser = await UserModel.findOne({
      $or: [{ email: userData.email }, { phoneNumber: userData.phoneNumber }],
    });
    if (existingUser) {
      return jsonResponse({
        status: statusCodes.HTTP_CONFLICT,
        message: 'User with the same email/phone number exists',
        res,
      });
    }
    const newUser = await UserModel.create({ ...userData });

    return jsonResponse({ status: statusCodes.HTTP_CREATED, data: newUser, res });
  }
}

export default UserController;
