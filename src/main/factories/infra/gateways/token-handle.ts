import { JwtTokenHandler } from "@infra/gateways/jwt-tokne-handle";
import { env } from "@main/config/env";

export const makeJwtTokeHandler = (): JwtTokenHandler => {
  return new JwtTokenHandler(env.jwtSecret);
};
