const mongoose = require ('mongoose');
const deliveryOrderStatusSchema = mongoose.Schema (
    {
        delivery_status_id: {
            type: Number,
            required: true
        },
        buddy_task_id: {
            type: Number,
            required: true
        },
        delivery_order_status: {
            type: String,
            required: true
        },
        time_each_status: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true
    }
);



module.exports = mongoose.model ("delivery_order_status", deliveryOrderStatusSchema);