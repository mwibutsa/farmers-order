import { Request, Response } from 'express';
import jsonResponse from '@helpers/jsonResponse';
import * as statusCodes from '@constants/statusCodes';
import { OrderModel, StoreModel, SeedModel, FertilizerModel } from '@models';

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

    return jsonResponse({ data: orders, res });
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} - newly created order
   */
  static async createOrder(req: Request, res: Response): Promise<Response> {
    const { landSize, storeId, seedId, fertilizerId } = req.body;

    const store = await StoreModel.findById(storeId);
    const seed = await SeedModel.findById(seedId);
    const fertilizer = await FertilizerModel.findById(fertilizerId);

    if (!fertilizer) {
      return jsonResponse({
        status: statusCodes.HTTP_BAD_REQUEST,
        message: `Fertilizer with id ${fertilizerId} doesn't exist.`,
        res,
      });
    }
    if (!seed) {
      return jsonResponse({
        status: statusCodes.HTTP_BAD_REQUEST,
        message: `Seed with id ${seedId} doesn't exist.`,
        res,
      });
    }

    if (!store) {
      return jsonResponse({
        status: statusCodes.HTTP_BAD_REQUEST,
        message: 'Can not make an order to a non existing store',
        res,
      });
    }

    let newOrder = await OrderModel.create({
      farmer: req.currentUserId,
      store: storeId,
      landSize,
      fertilizer: fertilizerId,
      seed: seedId,
    });

    newOrder = await newOrder.populate('seed', 'seedName');
    newOrder = await newOrder.populate('fertilizer', 'fertilizerName');

    return jsonResponse({
      status: statusCodes.HTTP_CREATED,
      data: newOrder,
      res,
    });
  }

  /**
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<Response>} - newly created order
   */
  static async updateOrder(req: Request, res: Response): Promise<Response> {
    const { orderId } = req.params;
    const order = await OrderModel.findById(orderId);

    if (!order) {
      return jsonResponse({ res, status: statusCodes.HTTP_NOT_FOUND, message: 'Target order was not found.' });
    }

    await order.updateOne({ ...req.body });
    return jsonResponse({ res, data: order });
  }
}

export default Order;
