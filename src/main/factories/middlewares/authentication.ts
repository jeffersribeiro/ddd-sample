import { AuthententicationMiddleware } from "@application/middleware";
import { makeJwtTokeHandler } from "../infra/gateways/token-handle";

export const makeAuthenticationMiddleware = (): AuthententicationMiddleware => {
  const jwt = makeJwtTokeHandler();
  return new AuthententicationMiddleware(jwt.validate.bind(jwt));
};
