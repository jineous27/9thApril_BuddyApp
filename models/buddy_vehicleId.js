const mongoose = require ('mongoose');
const buddyVehicleSchema = mongoose.Schema(
    {
        // buddy_vehicle_id: {
        //     type: Number,
        //     required: true
        // },
        delivery_buddy_id: {
            type: String,
            required: true
        },
        vehicle_registration_number: {
            type: String,
            required: true
        },
        vehicle_type: {
            type: String,
            required: true
        },
        vehicle_model: {
            type: String,
            required: true
        },
        vehicle_color: {
            type: String,
            required: true
        },
        vehicle_insurance: {
            type: Boolean,
            default: false
        },
        insurance_documents: {
            type: String, 
            required: true
        }
    },
    {
        timestamp: true
    }
);



module.exports = mongoose.model ("buddy_vehicle_id", buddyVehicleSchema);