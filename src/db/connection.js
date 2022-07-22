const { Pool } = require("pg");

const pool = new Pool(poolConfig);

const poolConfig = {
    connectionString: process.env.DATABASE_URL,
}

if (process.env.NODE_ENV === "production") {
    poolConfig.ssl = {rejectUnauthorized: false}
}

module.exports = pool
