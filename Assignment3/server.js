const express = require("express");
const mongoose = require("mongoose");
let server = express();

server.use(express.json());
server.set("view engine", "ejs");

let ejsLayouts = require("express-ejs-layouts");
server.use(ejsLayouts);



server.use(express.static("public", { 
  setHeaders: (res, path, stat) => {
      if (path.endsWith(".js")) {
          res.set("Content-Type", "application/javascript");
      }
  }
}));




server.get('/contact-us', (req, res) => {
  res.render('contact-us', { layout: 'layout.ejs' });
})

server.get("/charity",  (req, res) => {
  res.render("charity.ejs");
 
});

server.get("/blood-bank",  (req, res) => {
  res.render("blood-bank.ejs");
   
});

server.get("/",  (req, res) => {
  res.render("homepage");
   
});




server.listen(4000, () => {
  console.log("server started listening at localhost:4000");
});
mongoose
  .connect("mongodb://0.0.0.0:27017/mernstack")
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to MongoDB:", err);
  });


  