import { forbidden, HttpResponse, ok } from "@application/helpers/http";
import { Middleware } from "./middleware";

type HttpRequest = { authorization: string };
type Model = Error | { uid: string };
type Authorize = (input: { token: string }) => Promise<string>;

export class AuthententicationMiddleware implements Middleware {
  constructor(private readonly authorize: Authorize) {}

  async handle({ authorization }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const uid = await this.authorize({ token: authorization });
      return ok({ uid });
    } catch (error) {
      return forbidden();
    }
  }
}
