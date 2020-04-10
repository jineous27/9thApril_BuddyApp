const express = require('express');
const router = express.Router();

//CRUD - Create Retrieve Update Delete


// API for getting whole Buddy Task ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully GET Buddy Task ID"
    });
});

// API for getting the certain Buddy Task ID

// API for posting Buddy Task ID
router.post ('/', (req, res) => {
    res.json ({
        msg: "Successfully POST Buddy Task ID"
    });
});

// API for patching Buddy Task ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully PATCH Buddy Task ID"
    });
});

// API for deleting Buddy Task ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully DELETE Buddy Task ID"
    });
});


module.exports = router;