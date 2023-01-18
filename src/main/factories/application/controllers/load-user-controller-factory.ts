import { Controller } from "@application/controllers";
import { LoadUserController } from "@application/controllers";

import { makeLoadUserRepository } from "@main/factories/domain/use-cases";
import { makePgTransactionController } from "@main/factories/application/decorators";

export const makeLoadUserController = (): Controller => {
  const controller = new LoadUserController(makeLoadUserRepository());
  return makePgTransactionController(controller);
};
