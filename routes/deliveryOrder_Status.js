const express = require('express');
const router = express.Router();

//CRUD - Create Retrieve Update Delete


// API for getting whole Delivery Order Status ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully get Delivery Order Status ID"
    });
});

// API for getting the certain Delivery Order Status ID


// API for posting the Delivery Order status ID

// API for patching the Delivery Order Status ID

// API for deleting the Delivery Order Status ID

module.exports = router;