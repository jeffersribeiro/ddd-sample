import { Controller } from "@application/controllers";
import { CreateUserController } from "@application/controllers";
import { makeCreateUserRepository } from "@main/factories/domain/use-cases";
import { makePgTransactionController } from "@main/factories/application/decorators";

export const makeCreateUserController = (): Controller => {
  const controller = new CreateUserController(makeCreateUserRepository());
  return makePgTransactionController(controller);
};
