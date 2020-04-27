const express = require ('express');
const router = express.Router();
const buddyPaymentIdModel = require("../models/buddy_payment");

//CRUD - Create Retrieve Update Delete

//API for getting whole Buddy ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully GET Buddy Payment ID"
    });
});

//API for getting the certing buddy payment ID

//API for posting buddy payment ID
router.post ('/', (req, res) => {

    const newbuddyPaymentId = new buddyPaymentIdModel ({
        delivery_payment_id: req.body.delivery_payment_id,
        order_id: req.body. order_id,
        delivery_buddy_id: req.body.delivery_payment_id,
        payment_comment: req.body.payment_comment

    });

    newbuddyPaymentId
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Handling POST requests to buddy Id',
                createBuddyPaymentInfo: result
            })
        })
        . catch(err => {
            res.status(500).json({
                error: err.message
            });
        });

    // res.json ({
    //     msg: "Successfully POST Buddy Payment ID",
    //     buddyPaymentIdInfo: buddyPaymentId,
    // });
});

//API for patching buddy payment ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully PATCH Buddy Payment ID"
    });
});

// API for deleting buddy payment ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully DELETE Buddy Payment ID"
    });
});

module.exports =router;