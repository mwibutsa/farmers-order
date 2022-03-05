import { Request, Response } from 'express';
import jsonResponse from '@helpers/jsonResponse';
import * as statusCodes from '@constants/statusCodes';
import { OrderModel, StoreModel } from '@models';

/**
 * A class to manage  user orders
 */
class Order {
  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} - list of current user orders
   */
  static async getUserOrders(req: Request, res: Response): Promise<Response> {
    const orders = await OrderModel.find({ owner: req.currentUserId }).limit(5);
    return jsonResponse({ status: statusCodes.HTTP_OK, data: orders, res });
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} - newly created order
   */
  static async createOrder(req: Request, res: Response): Promise<Response> {
    const { landSize, storeId } = req.body;

    const store = await StoreModel.findById(storeId);

    if (store) {
      const newOrder = await OrderModel.create({
        owner: req.currentUserId,
        store: storeId,
        landSize,
      });

      return jsonResponse({
        status: statusCodes.HTTP_CREATED,
        data: newOrder,
        res,
      });
    }

    return jsonResponse({
      status: statusCodes.HTTP_BAD_REQUEST,
      message: 'Can not make an order to a non existing store',
      res,
    });
  }
}

export default Order;
