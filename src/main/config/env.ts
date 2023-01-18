export const env = {
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET,
  jwtRefreshToken: process.env.JWT_REFRESH_SECRET,
};
