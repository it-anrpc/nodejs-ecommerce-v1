const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan"); // to log requests
const mongoose = require("mongoose");


dotenv.config({ path: "config.env" });
const dbConnection = require("./config/database");
const categoryRoute = require ("./routes/categoryRoute")


//connect to database
dbConnection();

//express app
const app = express();

//Middlewares
app.use(express.json());  //parsing string come from req to json 

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

//Mount Routes
app.use('/api/v1/categories', categoryRoute)

/*app.get("/", function (req, res) {
  res.send("Hellrrrreeeeeroooooooffff WorASasld");
});*/

//app.post("/", );

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("app running on port " + PORT);
});
