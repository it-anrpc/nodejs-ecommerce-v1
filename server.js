const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
dotenv.config({ path: "config.env" });

//connect to database
mongoose
  .connect(process.env.DB_URI)
  .then((conn) => {
    console.log("database connected " + conn.connection.host);
  })
  .catch((err) => {
    console.log("error connection " + err);
    process.exit(1);
  });

//express app
const app = express();

//Middlewares
app.use(express.json());
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

//1- create schema
const CategorySchema = new mongoose.Schema({
  name: String,
});

//2- create model
const CategoryModel = new mongoose.model("Category", CategorySchema);

//Routes
app.get("/", function (req, res) {
  res.send("Hellrrrreeeeeroooooooffff WorASasld");
});

app.post("/", (req, res) => {
  const name = req.body.name;
  console.log(req.body);

  const newCategory = new CategoryModel({ name: name });
  newCategory
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("app running on port " + PORT);
});
