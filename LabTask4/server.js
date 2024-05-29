const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const ejsLayouts = require("express-ejs-layouts");


const server = express();

server.use(express.json());
server.set("view engine", "ejs");
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(ejsLayouts);
server.use(cookieParser());
server.use(expressSession({
  secret: "My Secret Key",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Middleware to set session user for views
server.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});







const recieverRouter = require("./routes/api/blood-bank-needy");
const userRouter = require("./routes/api/User");
const studentsAPIRouter = require("./routes/org");

server.use("/organisations", require("./routes/org"));
server.use(express.static("public", {
  setHeaders: (res, path, stat) => {
    if (path.endsWith(".js")) {
      res.set("Content-Type", "application/json");
    }
  }
}));

server.use(studentsAPIRouter);
server.use("/api/blood-bank-needy", recieverRouter);
server.use("/api/user", userRouter);

server.get('/contact-us', (req, res) => {
  res.render('contact-us', { layout: 'layout.ejs', user: req.session.user });
});

server.get("/blood-bank", (req, res) => {
  res.render("blood-bank.ejs", { user: req.session.user });
});

server.get("/", (req, res) => {
  res.render("homepage", { user: req.session.user });
});

server.get("/login", (req, res) => {
  res.render("partials/login", { user: req.session.user });
});

server.get("/register", (req, res) => {
  res.render("partials/register", { user: req.session.user });
});

server.get("/logout", (req, res) => {
  req.session.user = null;
  res.redirect("/");
});


server.listen(4000, () => {
  console.log("server started listening at localhost:4000");
});

mongoose.connect(config.get("db"))
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB:", err);
  });
