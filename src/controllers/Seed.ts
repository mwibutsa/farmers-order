import { Response, Request } from 'express';
import jsonResponse from '@helpers/jsonResponse';
import { SeedModel } from '@models';
import * as statusCodes from '@constants/statusCodes';

/**
 * An object to manage seeds
 */
class Seed {
  /**
   * @author Mwibutsa Floribert
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} -Json response
   */
  static async getSeeds(req: Request, res: Response): Promise<Response> {
    const seeds = await SeedModel.find().limit(5);

    return jsonResponse({ res, data: seeds });
  }

  /**
   * @author Mwibutsa Floribert
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} -
   */
  static async addSeed(req: Request, res: Response): Promise<Response> {
    const newSeed = await SeedModel.create({ ...req.body });
    return jsonResponse({ status: statusCodes.HTTP_CREATED, data: newSeed, res });
  }
}

export default Seed;
