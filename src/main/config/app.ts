import express from "express";
import { setupMiddleware } from "./middleware";
import { setupRoutes } from "./route";

const app = express();

setupMiddleware(app);
setupRoutes(app);

export { app };
