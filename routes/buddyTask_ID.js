const express = require('express');
const router = express.Router();

//CRUD - Create Retrieve Update Delete


// API for getting whole Buddy Task ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully get Buddy Task ID"
    });
});

// API for getting the certain Buddy Task ID

// API for posting Buddy Task ID

// API for patching Buddy Task ID

// API for deleting Buddy Task ID

module.exports = router;