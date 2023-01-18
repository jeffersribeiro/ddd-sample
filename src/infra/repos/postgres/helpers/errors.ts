export class ConnectionNotFoundError extends Error {
  constructor() {
    super("No connection was found");
    this.name = "ConnectionNotFound";
  }
}

export class TrasanctionNotFoundError extends Error {
  constructor() {
    super("Not transaction was found");
    this.name = "TrasanctionNotFoundError";
  }
}
