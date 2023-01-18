import { CreateUser, LoadUser } from "@domain/contracts/repos/user-repository";
import { PgUser } from "./postgres/entities";
import { PgRepository } from "./repository";

export class PgUserRepository
  extends PgRepository
  implements CreateUser, LoadUser
{
  async create({
    email,
    name,
    password,
  }: CreateUser.Input): Promise<CreateUser.Ouptut> {
    const userRepo = this.getRepository(PgUser);
    const user = userRepo.create({ email, name, password });
    await userRepo.save(user);

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  async load({ email }: LoadUser.Input): Promise<LoadUser.Ouptut> {
    const userRepo = this.getRepository(PgUser);
    const user = await userRepo.findOneBy({ email });
    if (user) {
      return {
        id: user?.id,
        email: user?.email,
        name: user?.name,
      };
    }
  }
}
