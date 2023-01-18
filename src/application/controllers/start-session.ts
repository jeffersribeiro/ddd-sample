import { Controller } from "@application/controllers";
import { HttpResponse, ok, unauthorized } from "@application/helpers/http";
import { StartSessionUseCase } from "@data/use-cases/session";

type HttpRequest = { email: string; password: string };
type Model =
  | Error
  | {
      user: { id: number; name: string; email: string };
      token: string;
      expiresIn: Date;
    };

export class StartSessionController extends Controller {
  constructor(private readonly login: StartSessionUseCase) {
    super();
  }

  override async perform({
    email,
    password,
  }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const session = await this.login({ email, password });
      return ok(session);
    } catch (error) {
      return unauthorized();
    }
  }
}
