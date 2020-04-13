const express = require ('express');
const router = express.Router();

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

    const buddyPaymentId = {
        buddyPaymentId: req.body.buddyPaymentId,
        orderId: req.body.orderId,
        deliveryBuddyId: req.body.deliveryBuddyId,
        paymentComment: req.body.paymentComment

    }


    res.json ({
        msg: "Successfully POST Buddy Payment ID",
        buddyPaymentIdInfo: buddyPaymentId,
    });
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