import { setupCreateUser } from "@domain/use-cases";
import { makePgUserRepo } from "main/factories/infra/repos/postgres";

export const makeCreateUserRepository = () => {
  return setupCreateUser(makePgUserRepo());
};
