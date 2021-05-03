import { Pool } from 'pg';
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  async query(text, params) {
    const res = await pool.query(text, params);
    return res;
  },
};
