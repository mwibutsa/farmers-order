import { Response, Request } from 'express';
import jsonResponse from '@helpers/jsonResponse';
import { FertilizerModel } from '@models';
import * as statusCodes from '@constants/statusCodes';

/**
 * An object to manage seeds
 */
class Fertilizer {
  /**
   * @author Mwibutsa Floribert
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} -Json response
   */
  static async getFertilizers(req: Request, res: Response): Promise<Response> {
    const fertilizers = await FertilizerModel.find().limit(5);

    return jsonResponse({ res, data: fertilizers });
  }

  /**
   * @author Mwibutsa Floribert
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} -
   */
  static async addFertilizer(req: Request, res: Response): Promise<Response> {
    const newFertilizer = await FertilizerModel.create({ ...req.body });
    return jsonResponse({ status: statusCodes.HTTP_CREATED, data: newFertilizer, res });
  }
}

export default Fertilizer;
