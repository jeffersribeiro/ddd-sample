import { PgSessionRepository } from "@infra/repos/session-repository";

export const makePgSessionRepo = (): PgSessionRepository => {
  return new PgSessionRepository();
};
