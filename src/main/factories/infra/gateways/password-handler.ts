import { PasswordHandler } from "@infra/gateways/password-handler";

export const makePasswordHandler = (): PasswordHandler => {
  return new PasswordHandler();
};
