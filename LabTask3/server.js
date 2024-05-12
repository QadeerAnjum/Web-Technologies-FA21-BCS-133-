const express = require("express");
const mongoose = require("mongoose");
let server = express();
let Student = require("./models/Organisation");
var config=require("config") 
server.use(express.json());
server.set("view engine", "ejs");

const recieverRouter = require("./routes/api/blood-bank-needy");

let ejsLayouts = require("express-ejs-layouts");
server.use(ejsLayouts);



server.use(express.static("public", { 
  setHeaders: (res, path, stat) => {
      if (path.endsWith(".js")) {
          res.set("Content-Type", "application/javascript");
      }
  }
}));


let studentsAPIRouter = require("./routes/org");
server.use(studentsAPIRouter);

server.get('/contact-us', (req, res) => {
  res.render('contact-us', { layout: 'layout.ejs' });
})

// server.get("/charity",  (req, res) => {
//   res.render("charity.ejs");
 
// });

server.get("/blood-bank",  (req, res) => {
  res.render("blood-bank.ejs");
   
});
server.use("/organisations", require("./routes/org"));

server.use("/api/blood-bank-needy", recieverRouter);


server.get("/",  (req, res) => {
  res.render("homepage");
   
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


  