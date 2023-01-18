import { adaptExpressMiddleware } from "@main/adapters";
import { makeAuthenticationMiddleware } from "@main/factories/middlewares/authentication";

export const auth = adaptExpressMiddleware(makeAuthenticationMiddleware());
