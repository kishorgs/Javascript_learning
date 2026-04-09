import { Pool} from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "taskDB",
  password: "info@2026",
  port: 5432,
});