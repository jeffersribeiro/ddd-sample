import cors from "cors";
import morgan from "morgan";
import { Express, json } from "express";

export const setupMiddleware = (app: Express) => {
  app.use(json());
  app.use(cors());
  app.use(morgan("dev"));
  app.use((_req, res, next) => {
    res.type("json");
    next();
  });
};
