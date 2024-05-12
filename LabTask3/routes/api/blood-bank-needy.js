const express = require("express");
const router = express.Router();
const Reciever  = require("../../models/reciever"); // You are importing the Reciever model

router.post("/", async function (req, res) {
    try {
        // const { bloodGroup, name, contactNumber, address } = req.body;

        // // Check if all required fields are present
        // if (!bloodGroup || !name || !contactNumber || !address) {
        //     return res.status(400).send("Missing required fields");
        // }

        // Create a new receiver object using the Reciever model
        // const receiver = new Reciever({
        //    receiver.bloodGroup=req.body.bloodGroup,
        //     name,
        //     contactNumber,
        //     address,
        // });

        let receiver= new Reciever();
receiver.bloodGroup= req.body.bloodGroup;
receiver.name= req.body.name;
receiver.contactNumber= req.body.contactNumber;
receiver.address= req.body.address;

    
        // Save the receiver object to the database
        await receiver.save();

        // Send the saved receiver object as a response
        return res.send(receiver);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error saving receiver.");
    }
});

router.get("/", async function (req, res) {
    // Fetch all receivers from the database and send them as a response
    let receivers = await Reciever.find();
    return res.send(receivers);
});

module.exports = router;
