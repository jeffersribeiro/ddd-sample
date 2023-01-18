import { PgUserRepository } from "infra/repos/user-repository";

export const makePgUserRepo = (): PgUserRepository => {
  return new PgUserRepository();
};
