import { RequestHandler } from "express";

import { Middleware } from "@application/middleware";

type Adapter = (middleware: Middleware) => RequestHandler;

export const adaptExpressMiddleware: Adapter =
  (middleware) => async (req, res, next) => {
    const { statusCode, data } = await middleware.handle({ ...req });
    if (statusCode === 200) {
      next();
    } else {
      res.status(statusCode).json(data);
    }
  };
