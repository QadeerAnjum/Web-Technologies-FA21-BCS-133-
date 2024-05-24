const express = require("express");
const router = express.Router();
const Reciever  = require("../../models/reciever"); // You are importing the Reciever model

router.post("/", async function (req, res) {

    console.log("Received POST request to /api/blood-bank-needy/");
    console.log("Request Body:", req.body); // Log the request body

    let receiver= new Reciever(req.body);
    await receiver.save();
    res.redirect("/blood-bank");
});

router.get("/", async function (req, res) {
    // Fetch all receivers from the database and send them as a response
    let receivers = await Reciever.find();
    return res.send(receivers);
});

module.exports = router;
