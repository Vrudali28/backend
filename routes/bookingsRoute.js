const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Bike = require("../models/bikeModel")


router.post("/bookbike", async (req, res) => {

req.body.transactionId = '1234';
  
    try {
        
       
         
            const newbooking = new Booking(req.body);
            await newbooking.save();

            const bike = await Bike.findOne({ _id: req.body.bike });
            bike.bookedTimeSlots.push(req.body.bookedTimeSlots);
            await bike.save();

            res.send('Your booking is successful');
        


    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'An error occurred during booking.' });
    }
});

router.get("/getallbookings" ,async(req , res)=> {
try{

    const bookings = await Booking.find().populate('bike')
    res.send(bookings)

}
catch(error){
    return res.status(400).json(error);

}


});




module.exports = router;

//IMP!!!!//
/*const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Bike = require("../models/bikeModel")
const stripe = require('stripe')("sk_test_51Ovc8NSAxiTA3depABXkIGjd0m8rU7fQr2PiKpesVH22K7ITBsAdQZjwLah0gGYjy6EcvyowbZMW6kG8ZumXjnzA00dLBWNIkx")
const { v4: uuidv4 } = require('uuid');

router.post("/bookbike", async (req, res) => {


    const { token } = req.body;
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const payment = await stripe.charges.create({
            amount: req.body.totalAmount * 100,
             //currency : 'inr',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4(), // Corrected typo and added semicolon
        });
        if (payment) {
            console.log("payment succsessful")
            req.body.transactionId = payment.source.id;
            const newbooking = new Booking(req.body);
            await newbooking.save();

            const bike = await Bike.findOne({ _id: req.body.bike });
            bike.bookedTimeSlots.push(req.body.bookedTimeSlots);
            await bike.save();

            res.send('Your booking is successful');
        }
        else {
            console.log("payment failed");
            return res.status(400).json({ error: 'An error occurred during booking.' });
        }


    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'An error occurred during booking.' });
    }
});


module.exports = router;*/



