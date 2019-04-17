const localPgConnection = {
  host: "localhost",
  database: "nifty",
  username: "delba",
  password: "delba"
};

const productionDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/gigapet.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "pg",
    connection: productionDbConnection,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
