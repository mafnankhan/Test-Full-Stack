module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  emailSecret:
    process.env.EMAIL_SECRET_KEY || 'cbl8yHYRMFev9gnTYEAZGD34fjt4fQfP',
  jwtSecret: process.env.JWT_SECRET || 'secret',
  dashboardBaseUrl: process.env.DASHBOARD_BASE_URL || 'http://localhost:3000',
};
