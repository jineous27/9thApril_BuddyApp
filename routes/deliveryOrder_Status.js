const express = require('express');
const router = express.Router();

//CRUD - Create Retrieve Update Delete


// API for getting whole Delivery Order Status ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully GET Delivery Order Status ID"
    });
});

// API for getting the certain Delivery Order Status ID


// API for posting the Delivery Order status ID
router.post ('/', (req, res) => {
    res.json ({
        msg: "Successfully POST Delivery Order Status ID"
    });
});


// API for patching the Delivery Order Status ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully PATCH Delivery Order Status ID"
    });
});


// API for deleting the Delivery Order Status ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully DELETE Delivery Order Status ID"
    });
});

module.exports = router;