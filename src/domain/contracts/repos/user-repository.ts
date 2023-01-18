export interface LoadUser {
  load: (input: LoadUser.Input) => Promise<LoadUser.Ouptut>;
}

export namespace LoadUser {
  export type Input = { email: string };
  export type Ouptut = undefined | { id: number; name: string; email: string };
}

export interface CreateUser {
  create: (input: CreateUser.Input) => Promise<CreateUser.Ouptut>;
}

export namespace CreateUser {
  export type Input = { name: string; email: string; password: string };
  export type Ouptut = { id: number; name: string; email: string };
}
