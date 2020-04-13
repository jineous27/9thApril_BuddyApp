const express = require('express');
const router = express.Router();

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

    const newbuddyVehicleId = {
        buddyVehicleId: req.body.buddyVehicleId,
        buddyId: req.body.buddyId,
        vehicleType: req.body.vehicleType,
        vehicleModel: req.body.vehicleModel,
        vehicleColor: req.body.vehicleColor,
        vehicleInsurance: req.body.vehicleInsurance

    };


    res.json ({
        msg: "Successfully post Buddy Vehicle ID",
        buddyVehicleIdInfo: newbuddyVehicleId
    });
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