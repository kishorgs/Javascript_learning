import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Tasks"');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const { title, description } = req.body;

    const result = await pool.query(
      "INSERT INTO \"Tasks\"(title, description) VALUES($1,$2) RETURNING *",
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const result = await pool.query(
      "UPDATE \"Tasks\" SET title=$1, description=$2 WHERE id=$3",
      [title, description, id]
    );

    res.json({ message: "Task updated" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM \"Tasks\" WHERE id=$1", [id]);

    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});