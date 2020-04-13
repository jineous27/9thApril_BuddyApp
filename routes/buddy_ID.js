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

    const newbuddyId = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        accountEmail: req.body.accountEmail,
        accountPassword: req.body.accountPassword,
        buddyDateofbirth: req.body.buddyDateofbirth,
        termsconditions: req.body.termsconditions,
        buddyProfileImage: req.body.buddyProfileImage,
        buddyWorkType: req.body.buddyWorkType,
        buddyABN: req.body.buddyABN,
        registerGST: req.body.registerGST,
        buddyContact: req.body.buddyContact
    };


    res.json ({
        msg: "Successfully post buddy ID",
        buddyIdInfo: newbuddyId
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

