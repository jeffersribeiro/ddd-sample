import { Controller } from "@application/controllers";
import { DbTransactionController } from "@application/decorators/db-transaction-controller";
import { makePgConnection } from "main/factories/infra/repos/postgres/helpers";

export const makePgTransactionController = (
  controller: Controller
): DbTransactionController => {
  return new DbTransactionController(controller, makePgConnection());
};
