import { setupLoadUser } from "@data/use-cases/user";
import { makePgUserRepo } from "@main/factories/infra/repos/postgres";

export const makeLoadUserRepository = () => {
  return setupLoadUser(makePgUserRepo());
};
