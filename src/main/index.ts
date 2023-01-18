import "dotenv/config";
import "reflect-metadata";

import { PgConnection } from "@infra/repos/postgres/helpers/connection";

import { env } from "./config/env";

PgConnection.getInstance()
  .connect()
  .then(async () => {
    const { app } = await import("@main/config/app");
    app.listen(env.port, () =>
      console.log(`Server running at http://localhost:${env.port}`)
    );
  })
  .catch(console.error);
