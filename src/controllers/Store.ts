import { Response, Request } from 'express';
import jsonResponse from '@helpers/jsonResponse';
import { StoreModel } from '@models';
import * as statusCodes from '@constants/statusCodes';
/**
 * An object to manage fertilizer and seed stores
 */
class Store {
  /**
   * @author Mwibutsa Floribert
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} -Json response
   */
  static async getStores(req: Request, res: Response): Promise<Response> {
    const stores = await StoreModel.find().limit(5);
    return jsonResponse({ res, data: stores });
  }

  /**
   * @author Mwibutsa Floribert
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} -
   */
  static async createStore(req: Request, res: Response): Promise<Response> {
    const storeData = req.body;

    const newStore = await StoreModel.create({ ...storeData, owner: req.currentUserId });

    return jsonResponse({ status: statusCodes.HTTP_CREATED, data: newStore, res });
  }
}

export default Store;
