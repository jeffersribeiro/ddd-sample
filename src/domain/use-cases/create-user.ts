import { CreateUser, LoadUser } from "@domain/contracts/repos/user-repository";

type Setup = (userRepository: CreateUser & LoadUser) => CreateUserUseCase;

type Input = { email: string; name: string; password: string };
type Ouptut = { id: number; email: string; name: string };

export type CreateUserUseCase = (input: Input) => Promise<Ouptut>;

export const setupCreateUser: Setup =
  (userRepo) =>
  async ({ email, name, password }) => {
    const alreadyExists = await userRepo.load({ email });
    if (alreadyExists != null) throw new Error("email already in use!");

    const user = await userRepo.create({ email, name, password });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  };
