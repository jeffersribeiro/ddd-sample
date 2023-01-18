import { StartSession } from "@domain/contracts/repos";

import { PgSession } from "./postgres/entities/session";
import { PgRepository } from "./repository";

export class PgSessionRepository extends PgRepository implements StartSession {
  async signin({
    token,
    user,
    expiresIn,
  }: StartSession.Input): Promise<StartSession.Ouptut> {
    const sessionRepo = this.getRepository(PgSession);

    const session = sessionRepo.create({ token, user, expiresIn });
    await sessionRepo.save(session);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      expiresIn: session.expiresIn,
      token: session.token,
    };
  }
}
