const express = require("express");

const app = express();

require("dotenv").config();

const cors = require("cors");

const path = require("path")

//Routes
const auth_routes = require("./routes/auth_routes")

//Conf options

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.HOST,
    methods: ["POST", "GET", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(auth_routes);

//Server start
app.listen(process.env.PORT, () => {
  console.log("Succesfully launched the app on port:", process.env.PORT);
});
