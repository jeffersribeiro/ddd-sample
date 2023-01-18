import { HttpResponse, ok, serverError } from "@application/helpers/http";
import { CreateUserUseCase } from "@domain/use-cases/create-user";

import { Controller } from "./controller";

export type HttpRequest = { email: string; name: string; password: string };
export type Model = Error | { id: number; email: string; name: string };

export class CreateUserController extends Controller {
  constructor(private readonly createUser: CreateUserUseCase) {
    super();
  }
  override async perform({
    email,
    name,
    password,
  }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const user = await this.createUser({ email, name, password });
      return ok(user);
    } catch (error) {
      return serverError(error);
    }
  }
}
