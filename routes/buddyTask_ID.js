const express = require('express');
const router = express.Router();
const buddyTaskIdModel = require("../models/buddy_task_id");

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
    const newbuddyTaskId = new buddyTaskIdModel ({
        // buddy_task_id: req.body.buddy_task_id,
        order_id: req.body.order_id,
        delivery_buddy_id: req.body.delivery_buddy_id,
        delay_at_shop: req.body.delay_at_shop,
        shop_delay_reason: req.body.shop_delay_reason,
        buddy_comment: req.body.buddy_comment,
        users_signature: req.body.users_signature,
        user_delivery_report: req.body.user_delivery_report,
        cash_receivable: req.body.cash_receivable,
        buddy_service_fee: req.body.buddy_service_fee

    });

    newbuddyTaskId
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Handling POST requests to buddy task Id',
                createdBuddyTaskIdinfo: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });


    // res.json ({
    //     msg: "Successfully POST Buddy Task ID",
    //     buddyTaskIdInfo: buddyTaskId
    // });
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