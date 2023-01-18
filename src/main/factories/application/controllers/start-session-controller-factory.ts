import { Controller } from "@application/controllers";
import { StartSessionController } from "@application/controllers/start-session";
import { makeStartSession } from "@main/factories/domain/use-cases/start-session";
import { makePgTransactionController } from "../decorators";

export const makeStartSessionController = (): Controller => {
  const controller = new StartSessionController(makeStartSession());
  return makePgTransactionController(controller);
};
