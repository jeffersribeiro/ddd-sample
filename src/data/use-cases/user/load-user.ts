import { CreateUser, LoadUser } from "@domain/contracts/repos";

type Setup = (userRepository: CreateUser & LoadUser) => LoadUserUseCase;
type Input = { email: string };
type Ouptut = { id: number; name: string; email: string };
export type LoadUserUseCase = (input: Input) => Promise<Ouptut>;

export const setupLoadUser: Setup =
  (userRepo) =>
  async ({ email }) => {
    const user = await userRepo.load({ email });
    if (!user) throw new Error("User not found!");

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  };
