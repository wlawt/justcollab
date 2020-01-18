const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// API routes
const client = require("./routes/api/client");
const host = require("./routes/api/host");
const html = require("./routes/api/html");
const register = require("./routes/api/register");

// Init
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes
app.use("/api/client", client);
app.use("/api/host", host);
app.use("/api/html", html);
app.use("/api/register", register);

// mongodb
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
mongoose.set("useFindAndModify", false);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
