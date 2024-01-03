const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb://admin:admin@ac-cfxipq2-shard-00-00.tnx40df.mongodb.net:27017,ac-cfxipq2-shard-00-01.tnx40df.mongodb.net:27017,ac-cfxipq2-shard-00-02.tnx40df.mongodb.net:27017/?replicaSet=atlas-4zfuy5-shard-0&ssl=true&authSource=admin`
  )
  .then(() => {
    console.log("db connected");
  });

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
