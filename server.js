const express = require('express');
const app = express();


const buddyIdRoutes = require ('./routes/buddy_ID');
const buddyVehicleIdRoutes = require ('./routes/buddyVehicle_ID');




app.use('/api/buddyid', buddyIdRoutes);
app.use('/api/buddyvehicleid', buddyVehicleIdRoutes);








const port =1111;
app.listen(port, console.log(`Server is running on port ${port} `));