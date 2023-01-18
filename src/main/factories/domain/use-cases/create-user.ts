import { setupCreateUser } from "@data/use-cases";

import { makePasswordHandler } from "@main/factories/infra/gateways";
import { makePgUserRepo } from "@main/factories/infra/repos/postgres";

export const makeCreateUserRepository = () => {
  return setupCreateUser(makePgUserRepo(), makePasswordHandler());
};
