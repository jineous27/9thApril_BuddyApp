const mongoose = require("mongoose");
const buddyIdSchema = mongoose.Schema(
    {
        delivery_buddy_id: {
            type: Number,
            required: true
        },
        buddy_first_name: {
            type: String,
            required: true
        },
        buddy_last_name: {
            type: String, 
            required:true
        },
        buddy_account_email: {
            type: String,
            required: true
        },
        buddy_account: {
            type: String,
            required: true
        },
        agree_termsConditions: {
            type: Boolean,
            required: true
        },
        buddy_dateofbirth:{
            type: Date,
            required: true
        },
        buddy_abn: {
            type: Number,
            required: true
        },
        buddy_emergency_name: {
            type: String, 
            required: true          
        },
        buddy_emergency_contact: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);




module.exports = mongooese.model ("buddy_id", buddyIdSchema)