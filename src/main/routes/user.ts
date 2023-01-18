import { Router } from "express";

import { adaptExpressRoute } from "@main/adapters";

import { makeCreateUserController } from "@main/factories/application/controllers";

export default (router: Router) => {
  router.post("/user", adaptExpressRoute(makeCreateUserController()));
};
