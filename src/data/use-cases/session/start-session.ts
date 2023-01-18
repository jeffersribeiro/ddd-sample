import { LoadUser, StartSession } from "@domain/contracts/repos";
import { JwtTokenHandler } from "@infra/gateways/jwt-token-handle";
import { PasswordHandler } from "@infra/gateways/password-handler";

type Setup = (
  passwordHandler: PasswordHandler,
  tokenHandler: JwtTokenHandler,
  userRepo: LoadUser,
  sessionRepo: StartSession
) => StartSessionUseCase;
type Input = { email: string; password: string };
type Output = {
  user: { id: number; name: string; email: string };
  token: string;
  expiresIn: Date;
};

export type StartSessionUseCase = (input: Input) => Promise<Output>;

export const setupStartSession: Setup =
  (passwordHandler, tokenHandler, userRepo, sessionRepo) =>
  async ({ email, password }) => {
    const user = await userRepo.load({ email });
    if (!user) throw new Error("User not found!");

    const match = await passwordHandler.compare({
      password,
      encrypted: user.password,
    });
    if (!match) throw new Error("User not found!");

    const expiresIn = new Date();

    const token = await tokenHandler.generate({
      key: email,
      expirationInMs: 1000,
    });

    const session = await sessionRepo.signin({
      token,
      user: { id: user.id, email: user.email, name: user.name },
      expiresIn,
    });
    return session;
  };
