const { Pool } = require("pg");

const poolConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false}
}

const pool = new Pool(poolConfig);

// if (process.env.NODE_ENV === "production") {
//     poolConfig.ssl = {rejectUnauthorized: false}
// }

module.exports = pool
