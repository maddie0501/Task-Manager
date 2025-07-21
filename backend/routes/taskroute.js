const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskcontroller");

const router = require("express").Router();
const upload = require('../config/multerConfig');

// GET all tasks
router.get("/", getTasks);

// POST create task (with optional PDF upload)
router.post("/", upload.single("pdf"), createTask);

// PATCH update a task by ID
router.patch("/:id", updateTask);

// DELETE a task by ID
router.delete("/:id", deleteTask);

module.exports = router;
