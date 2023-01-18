export {};

declare global {
  import { DataSourceOptions } from "typeorm";
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      TYPEORM_CONNECTION: DataSourceOptions;
      TYPEORM_HOST: string;
      TYPEORM_USERNAME: string;
      TYPEORM_PASSWORD: string;
      TYPEORM_DATABASE: string;
      TYPEORM_PORT: number;
      TYPEORM_SYNCHRONIZE: boolean;
      JWT_SECRET: string;
      JWT_REFRESH_SECRET: string;
    }
  }
}
