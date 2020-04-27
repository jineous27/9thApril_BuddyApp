const express = require('express');
const router = express.Router();
const buddyVehicleIdModel = require("../models/buddy_vehicleId");

//CRUD - Create Retrieve Update Delete


// API for getting whole Buddy Vehicle ID
router.get ('/', (req, res) => {
    res.json ({
        msg: "Successfully get Buddy Vehicle ID"
    });
});

// API for getting the certain Buddy Vehicle ID

// API for posting the Buddy Vehicle ID
router.post ('/', (req, res) => {

    const newbuddyVehicleId = new buddyVehicleIdModel ({
        // buddyVehicleId: req.body.buddyVehicleId,
        delivery_buddy_id: req.body.delivery_buddy_id,
        vehicle_registration_number: req.body.vehicle_registration_number,
        vehicle_type: req.body.vehicle_type,
        vehicle_model: req.body.vehicle_model,
        vehicle_color: req.body.vehicle_color,
        vehicle_insurance: req.body.vehicle_insurance,
        insurance_documents: req.body.insurance_documents
    });

    newbuddyVehicleId
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Handling POST requests to buddy ID',
                createBuddyVehicleId: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        });

    // res.json ({
    //     msg: "Successfully post Buddy Vehicle ID",
    //     buddyVehicleIdInfo: newbuddyVehicleId
    // });
});

// API for patching the Buddy Vehicle ID
router.patch ('/', (req, res) => {
    res.json ({
        msg: "Successfully patch Buddy Vehicle ID"
    });
});

// API for deleting the Buddy Vehicle ID
router.delete ('/', (req, res) => {
    res.json ({
        msg: "Successfully delete Buddy Vehicle ID"
    });
});



module.exports = router;