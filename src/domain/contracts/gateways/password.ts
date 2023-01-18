export interface EncriptPassword {
  encript: (input: EncriptPassword.Input) => Promise<EncriptPassword.Output>;
}

export namespace EncriptPassword {
  export type Input = { password: string };
  export type Output = string;
}

export interface ComparePassword {
  compare: (input: ComparePassword.Input) => Promise<ComparePassword.Output>;
}

export namespace ComparePassword {
  export type Input = { encrypted: string; password: string };
  export type Output = boolean;
}
