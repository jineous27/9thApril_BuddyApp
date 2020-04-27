const express = require('express');
const router = express.Router();
const buddyIdModel = require("../models/buddy_id");

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

    const newbuddyId = new buddyIdModel ({
        // buddy_vehicle_id: req.body.buddy_vehicle_id,
        buddy_first_name: req.body.buddy_first_name,
        buddy_last_name: req.body.buddy_last_name,
        buddy_account_email: req.body.buddy_account_email,
        buddy_account_password: req.body.buddy_account_password,
        buddy_dateofbirth: req.body.buddy_dateofbirth,
        agree_termsConditions: req.body.agree_termsConditions,
        buddy_profilie_image: req.body.buddy_profilie_image,
        buddy_work_type: req.body.buddy_work_type,
        buddy_abn: req.body.buddy_abn,
        registered_gst: req.body.registered_gst,
        buddy_emergency_name: req.body.buddy_emergency_name,
        buddy_emergency_contact: req.body.buddy_emergency_contact
    });

    newbuddyId
        .save()
        .then (result => {
            res.status(201).json({
                message: 'Handling POST requests to buddy ID'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });


    // res.json ({
    //     msg: "Successfully post buddy ID",
    //     buddyIdInfo: newbuddyId
    // });
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

