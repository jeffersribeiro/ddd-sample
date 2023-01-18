import { LoadUserUseCase } from "@domain/use-cases";
import { HttpResponse, ok, serverError } from "@application/helpers/http";

import { Controller } from "./controller";

type HttpRequest = { email: string };
type Model = Error | { id: number; name: string; email: string };

export class LoadUserController extends Controller {
  constructor(private readonly loadUser: LoadUserUseCase) {
    super();
  }

  override async perform({ email }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const user = await this.loadUser({ email });
      return ok(user);
    } catch (error) {
      return serverError(error);
    }
  }
}
