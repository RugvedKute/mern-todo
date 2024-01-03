const express = require("express");
const { todo } = require("./db");
const app = express();
const { createTodo, updateTodo } = require("./types");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);

  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
  }

  await todo.create({
    title: req.body.title,
    description: req.body.description,
  });

  res.status(200).json({
    msg: "Todo Created Sucessfully",
  });
});

app.put("/completed", function (req, res) {
  const createPayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(createPayLoad);

  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
  }

  todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000);
