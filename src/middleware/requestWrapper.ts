import { NextFunction, Request, Response } from "express";

const requestWrapper = (
  callbackFunc: (req: Request, res: Response) => void
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callbackFunc(req, res);
      next?.();
    } catch (error: any) {
      return res
        .status(error?.statusCode || 500)
        .json({ error: error?.message });
    }
  };
};

export default requestWrapper;
