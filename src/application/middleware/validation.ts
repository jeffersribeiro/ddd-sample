import { HttpResponse, ok, serverError } from "@application/helpers/http";
import { AnyZodObject } from "zod";
import { Middleware } from "./middleware";

type HttpRequest = { body: any };

export class ValidateMiddleware implements Middleware {
  constructor(private readonly schema: AnyZodObject) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      this.schema.parse(httpRequest.body);
      return ok(httpRequest);
    } catch (error) {
      return serverError(error);
    }
  }
}
