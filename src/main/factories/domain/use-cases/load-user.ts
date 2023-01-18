import { setupLoadUser } from "@domain/use-cases";
import { makePgUserRepo } from "@main/factories/infra/repos/postgres";

export const makeLoadUserRepository = () => {
  return setupLoadUser(makePgUserRepo());
};
