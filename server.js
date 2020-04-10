const express = require('express');
const app = express();


const buddyIdRoutes = require ('./routes/buddy_ID');
const buddyVehicleIdRoutes = require ('./routes/buddyVehicle_ID');
const buddyTaskIdRoutes = require ('./routes/buddyTask_ID');
const deliveryOrderStatusRoutes = require ('./routes/deliveryOrder_Status'); 


app.use('/api/buddyid', buddyIdRoutes);
app.use('/api/buddyvehicleid', buddyVehicleIdRoutes);
app.use('/api/buddytaskid', buddyTaskIdRoutes);
app.use('/api/deliveryorderstatusid', deliveryOrderStatusRoutes);







const port =1111;
app.listen(port, console.log(`Server is running on port ${port} `));