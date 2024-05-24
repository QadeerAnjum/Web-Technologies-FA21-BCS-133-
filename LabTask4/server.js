const express = require("express");
const mongoose = require("mongoose");
let server = express();
let Student = require("./models/Organisation");
var config=require("config") 
const bodyParser=require("body-parser");

server.use(express.json());
server.set("view engine", "ejs");
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.urlencoded({extended: true}))

const recieverRouter = require("./routes/api/blood-bank-needy");
const userRouter = require("./routes/api/User");
let studentsAPIRouter = require("./routes/org");

let cookieParser = require("cookie-parser");
let expressSession = require("express-session");
let ejsLayouts = require("express-ejs-layouts");
let checkAuth = require("./middlewares/check-auth");

server.use(ejsLayouts);
server.use(cookieParser());
server.use(expressSession({ secret: "My Secret Key" }));

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
  res.render('contact-us', { layout: 'layout.ejs' },{ user : req.session.user});
})

// server.get("/charity",  (req, res) => {
//   res.render("charity.ejs");
 
// });

server.get("/blood-bank",  (req, res) => {
  res.render("blood-bank.ejs",{ user : req.session.user});
   
});



server.get("/",  (req, res) => {
  res.render("homepage", { user : req.session.user});
   
});


server.get("/login",  (req, res) => {
  res.render("partials/login", { user : req.session.user});
   
});
server.get("/register",  (req, res) => {
  res.render("partials/register",{ user : req.session.user} );
  // {layout: false}
});


server.get("/logout", function (req, res) {
  // Clear user session upon logout
  req.session.user = null;
  res.redirect("/");
});




server.listen(4000, () => {
  console.log("server started listening at localhost:4000");
});
mongoose
  .connect(config.get("db"))
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB:", err);
  });


  