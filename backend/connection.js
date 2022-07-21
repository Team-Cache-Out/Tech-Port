const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_url,
    // ssl: { rejectUnauthorized: false }
})

export default pool