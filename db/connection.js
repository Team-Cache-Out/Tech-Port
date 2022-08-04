const { Pool } = require("pg");

const pool = new Pool({
  user: "sid",
  host: "localhost",
  database: "techport",
  password: "root",
  port: "5432"
})


module.exports = pool


// const { Pool } = require("pg");

// const poolConfig = {
//     connectionString: process.env.DATABASE_URL,
// }

// const pool = new Pool(poolConfig);

// if (process.env.NODE_ENV === "production") {
//     poolConfig.ssl = {rejectUnauthorized: false}
// }

// module.exports = pool
