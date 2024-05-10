// const express = require("express");
// let router = express.Router();
// let Student = require("../../models/Organisations");
// const Organisation = require("../../models/Organisations");

// router.post("/api/Organisations", async function (req, res) {
//   let data = req.body;
//   console.log(data)
//   let organisation = new Organisation(data);
//   await organisation.save();
//   res.send(organisation);
// });
// router.delete("/api/Organisations/:id", async function (req, res) {
//   let organisation = await Organisation.findByIdAndDelete(req.params.id);
//   if (!organisation) return res.status(404).send("Record Not Found");
//   res.send(organisation);
// });
// router.put("/api/Organisations/:id", async function (req, res) {
//   let organisation = await Organisation.findById(req.params.id);
//   if (!organisation) return res.status(404).send("Record Not Found");
//   organisation.number = req.body.number;
//   organisation.name = req.body.name;
//   organisation.desc = req.body.desc;

//   await organisation.save();
//   res.send(organisation);
// });
// router.get("/api/Organisations/:id", async function (req, res) {
//   let organisation = await Organisation.findById(req.params.id);
//   res.send(organisation);
// });
// router.get("/api/Organisation", async function (req, res) {
//   let organisation = await Organisation.find();
  
//   res.send(organisation);
// });

// module.exports = router;