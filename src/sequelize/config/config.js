module.exports = {
  development: {
    username: "postgres",
    password: "admin123",
    database: "postgres",
    host: "127.0.0.1:5432",
    url: "127.0.0.1:5432",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
    url: "127.0.0.1",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
    url: "127.0.0.1",
  },
};
