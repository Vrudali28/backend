const express = require('express');
const router = express.Router();
const Bike = require("../models/bikeModel");

router.get("/getallbikes", async (req, res) => {
    try {
        const bikes = await Bike.find();
        res.send(bikes);
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.post("/addbike", async (req, res) => {
    try {
        const newBike = new Bike(req.body);
        await newBike.save();
        res.status(201).json({ message: 'Bike added successfully', bike: newBike });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
});

router.post("/editbike", async (req, res) => {
    try {
        const bike = await Bike.findOne({ _id: req.body._id })
        bike.name = req.body.name
        bike.image = req.body.image
        bike.fuelType = req.body.fuelType
        bike.rentPerHour = req.body.rentPerHour
        bike.capacity = req.body.capacity

        await bike.save()
        res.send("Bike details updated successfully")

    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
});
router.post("/deletebike", async (req, res) => {
    try {

        await Bike.findOneAndDelete({ _id: req.body.bikeid })
        res.send("Bike deleted successfully")

    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;
