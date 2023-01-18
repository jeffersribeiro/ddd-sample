export const env = {
  port: process.env.PORT ?? 8080,
  typeorm_connection: process.env.TYPEORM_CONNECTION,
  typeorm_host: process.env.TYPEORM_HOST,
  typeorm_port: process.env.TYPEORM_PORT,
  typeorm_username: process.env.TYPEORM_USERNAME,
  typeorm_password: process.env.TYPEORM_PASSWORD,
  typeorm_database: process.env.TYPEORM_DATABASE,
  typeorm_synchronize: process.env.TYPEORM_SYNCHRONIZE,
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshToken: process.env.JWT_REFRESH_SECRET,
};
