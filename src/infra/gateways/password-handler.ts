import { compare, genSalt, hash } from "bcrypt";

import {
  ComparePassword,
  EncriptPassword,
} from "@domain/contracts/gateways/password";

export class PasswordHandler implements EncriptPassword, ComparePassword {
  async encript({ password }: EncriptPassword.Input): Promise<string> {
    const salt = await genSalt(10);
    return await hash(password, salt);
  }
  async compare({
    encrypted,
    password,
  }: ComparePassword.Input): Promise<boolean> {
    return await compare(password, encrypted);
  }
}
