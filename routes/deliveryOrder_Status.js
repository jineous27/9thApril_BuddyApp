const express = require('express');
const router = express.Router();
const deliveryOrderStatusModel = require("../models/delivery_order_status");

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

    const newDeliveryOrderStatusId = new deliveryOrderStatusModel ({
        // delivery_status_id: req.body.delivery_status_id,
        buddy_task_id: req.body.buddy_task_id,
        delivery_order_status: req.body.delivery_order_status,
        time_to_accept: req.body.time_to_accept,
        time_to_pickup: req.body.time_to_pickup,
        time_to_delay: req.body.time_to_delay,
        time_to_complete: req.body.time_to_complete,
        time_to_incomplete: req.body.time_to_incomplete,
        time_to_cancel: req.body.time_to_cancel
    });

    newDeliveryOrderStatusId
    .save()
    .then(result => {
        res.status(201).json({
            message: 'Handling POST requests to delivery order status id',
            createdeliveryOrderStatusInfo: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        });
    });



    // res.json ({
    //     msg: "Successfully POST Delivery Order Status ID",
    //     DeliveryOrderStatusInfo: newDeliveryOrderStatusId
    // });
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