const express = require('express');
const router = express.Router();
const User = require("../models/userModel");


router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });

        if (user) {
            res.send(user);
        } else {
            return res.status(400).json({ error: "Invalid username or password" });
        }
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = new User({ username, password });
        await newUser.save();
        res.send('User registered successfully');
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.get('/profile', async (req, res) => {
    try {
      // Assuming you have some authentication middleware to verify the user identity
      // For simplicity, let's assume req.user contains the authenticated user's details
      const user = req.user;
  
      // Fetch user profile data based on user ID
      const userProfile = await userModel.findById(user._id);
  
      // Send the user profile data as JSON response
      res.json(userProfile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = router;
