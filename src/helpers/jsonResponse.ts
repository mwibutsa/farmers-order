import { Response } from 'express';
import { HTTP_OK } from '@constants/statusCodes';

interface ResponseParams {
  res: Response;
  status?: number;
  data?: unknown;
  token?: string;
  message?: string;
  [key: string]: unknown;
}
/**
 * @param  {Object} data
 * @param  {ServerResponse} res
 * @return {Response} Response
 */
const jsonResponse = ({ status = HTTP_OK, res, data, ...otherData }: ResponseParams): Response => {
  return res.status(status).json({
    status,
    data,
    ...otherData,
  });
};

export default jsonResponse;
