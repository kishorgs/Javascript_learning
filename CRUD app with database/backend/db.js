import pkg from "pg";

const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "taskDB",
  password: "info@2026",
  port: 5432,
});