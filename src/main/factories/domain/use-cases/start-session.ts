import { setupStartSession } from "@data/use-cases";
import {
  makeJwtTokeHandler,
  makePasswordHandler,
} from "@main/factories/infra/gateways";
import {
  makePgSessionRepo,
  makePgUserRepo,
} from "@main/factories/infra/repos/postgres";

export const makeStartSession = () => {
  return setupStartSession(
    makePasswordHandler(),
    makeJwtTokeHandler(),
    makePgUserRepo(),
    makePgSessionRepo()
  );
};
