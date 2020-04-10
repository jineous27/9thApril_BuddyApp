const express = require('express');
const router = express.Router();

//CRUD - Create Retrieve Update Delete


// API for getting whole buddy ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully get buddy ID"
    });
});

// API for getting the certain buddy ID

// API for posting the buddy ID
router.post ('/', (req, res) => {
    res.json ({
        msg: "Successfully post buddy ID"
    });
});


// API for patching the buddy ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully patch buddy ID"
    });
});

// API for deleting the buddy ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully delete buddy ID"
    });
});


module.exports = router;

