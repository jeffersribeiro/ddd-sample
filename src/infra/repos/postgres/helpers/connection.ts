import {
  DataSource,
  ObjectLiteral,
  ObjectType,
  QueryRunner,
  Repository,
} from "typeorm";

import { DbTransaction } from "@application/contracts";

import { ConnectionNotFoundError, TrasanctionNotFoundError } from "./errors";

export class PgConnection implements DbTransaction {
  private static instance?: PgConnection;
  private query?: QueryRunner;
  private connection?: DataSource;

  static getInstance(): PgConnection {
    if (PgConnection.instance === undefined) {
      PgConnection.instance = new PgConnection();
    }
    return PgConnection.instance;
  }

  async connect(): Promise<void> {
    this.connection = await this.connection?.initialize();
  }

  async desconnect(): Promise<void> {
    if (this.connection === undefined) throw new ConnectionNotFoundError();
    await this.connection.destroy();
    this.query = undefined;
    this.connection = undefined;
  }

  async openTransaction(): Promise<void> {
    if (this.connection === undefined) throw new ConnectionNotFoundError();
    this.query = this.connection.createQueryRunner();
    await this.query.startTransaction();
  }

  async closeTransaction(): Promise<void> {
    if (this.query === undefined) throw new TrasanctionNotFoundError();
    await this.query.release();
  }

  async commit(): Promise<void> {
    if (this.query === undefined) throw new TrasanctionNotFoundError();
    await this.query.commitTransaction();
  }

  async rollback(): Promise<void> {
    if (this.query === undefined) throw new TrasanctionNotFoundError();
    await this.query.rollbackTransaction();
  }

  getRepository<Entity extends ObjectLiteral>(
    entity: ObjectType<Entity>
  ): Repository<Entity> {
    if (this.connection === undefined) throw new ConnectionNotFoundError();
    if (this.query !== undefined) {
      return this.query.manager.getRepository(entity);
    }
    return this.connection.getRepository(entity);
  }
}
