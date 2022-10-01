const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan"); // to log requests
const mongoose = require("mongoose");

dotenv.config({ path: "config.env" });
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoute");

//connect to database
dbConnection();

//express app
const app = express();

//Middlewares
app.use(express.json()); //parsing string come from req to json

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

//Mount Routes
app.use("/api/v1/categories", categoryRoute);

/*app.get("/", function (req, res) {
  res.send("Hellrrrreeeeeroooooooffff WorASasld");
});*/

//app.post("/", );

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("app running on port " + PORT);
});

/**
 * app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  next();
});


//Parses Request Body - TO DO LOOK INTO TWO BODY PARSER EFFECT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//define session variables
app.use(
  session({
    store: new FileStore(),
    secret: "Shh, its a secret!",
    resave: true,
    saveUninitialized: true,
    cookie: { httpOnly: false },
  })
);
 */
