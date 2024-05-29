const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const ejsLayouts = require("express-ejs-layouts");
const Product = require('./models/Product'); // Import the Product model

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(expressSession({
  secret: "My Secret Key",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

server.set("view engine", "ejs");
server.use(ejsLayouts);

// Middleware to set session user for views
server.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Define your routes here
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

server.get("/", async (req, res) => {
  try {
    const featuredProducts = await Product.find({ isFeatured: true }).limit(5);
    console.log("Featured Products: ", featuredProducts);
    if (featuredProducts.length === 0) {
      console.log("No featured products found");
    }
    res.render("homepage", { layout: 'layout.ejs', user: req.session.user ,featuredProducts});
  } catch (error) {
    console.error("Error retrieving featured products:", error);
    res.status(500).send("Error retrieving featured products.");
  }
});


server.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    
    // Store visited product ID in session
    if (!req.session.visitedProducts) {
      req.session.visitedProducts = [];
    }
    if (!req.session.visitedProducts.includes(req.params.id)) {
      req.session.visitedProducts.push(req.params.id);
    }

    res.render('product', { product, user: req.session.user });
  } catch (error) {
    console.error('Error retrieving product:', error);
    res.status(500).send('Error retrieving product');
  }
});

server.get('/visited-products', async (req, res) => {
  try {
    const visitedProductIds = req.session.visitedProducts || [];
    const visitedProducts = await Product.find({ _id: { $in: visitedProductIds } });
    res.render('visited-products', { visitedProducts, user: req.session.user });
  } catch (error) {
    console.error('Error retrieving visited products:', error);
    res.status(500).send('Error retrieving visited products');
  }
});

server.listen(4000, () => {
  console.log("server started listening at localhost:4000");
});

mongoose.connect(config.get("db"))
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.error("Unable to connect to MongoDB:", err);
  });
