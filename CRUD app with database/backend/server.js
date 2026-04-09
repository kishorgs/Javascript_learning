import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import { deleteTheTaskTable, insertToTaskTable, selectAllFromTaskTable, updateTheTaskTable } from "./queries.js";

const app = express();

app.use(cors());
app.use(express.json());

// API route to fetch all tasks from the Tasks table
app.get("/tasks", async (req, res) => {
  try {
    const result = await pool.query(selectAllFromTaskTable);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
  }
});

// API route to save a task in to Tasks table
app.post("/tasks", async (req, res) => {
  try {
    const { title, description } = req.body;

    const result = await pool.query(
      insertToTaskTable,
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
  }
});


//API route to edit a task in task table
app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const result = await pool.query(
      updateTheTaskTable,
      [title, description, id]
    );

    res.json({ message: "Task updated", result : result.rows[0] });
  } catch (err) {
    console.error(err);
  }
});

//API route to delete a task from tasks table
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(deleteTheTaskTable);

    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error(err);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});