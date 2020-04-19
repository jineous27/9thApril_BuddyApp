const mongoose = require('mongoose');
const buddyTaskIdSchema = mongoose.Schema(
    {
        buddy_task_id: {
            type: Number,
            required: true
        },
        order_id: {
            type: Number,
            required: true
        },
        delivery_buddy_id: {
            type: Number,
            required: true
        },
        delay_at_shop: {
            type: Boolean,
            default: false
        },
        shop_delay_reason: {
            type: String,
        },
        buddy_comment: {
            type: String,
        },
        users_signature: {
            type: String,
        },
        user_delivery_report: {
            type: Boolean,
            default: false
        },
        cash_receivable: {
            type: String,
            required: true
        },
        buddy_service_fee: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);




module.exports = mongoose.model ("buddy_task_id", buddyTaskIdSchema);