export interface StartSession {
  signin: (input: StartSession.Input) => Promise<StartSession.Ouptut>;
}

export namespace StartSession {
  export type Input = {
    token: string;
    expiresIn: Date;
    user: { id: number; name: string; email: string };
  };
  export type Ouptut = {
    user: { id: number; name: string; email: string };
    token: string;
    expiresIn: Date;
  };
}

export interface EndSession {
  signout: (input: EndSession.Input) => Promise<EndSession.Ouptut>;
}

export namespace EndSession {
  export type Input = { email: string; password: string };
  export type Ouptut = {
    user: { id: number; name: string; email: string };
    token: string;
    expiresIn: Date;
  };
}
