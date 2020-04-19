const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const buddyIdRoutes = require ('./routes/buddy_ID');
const buddyVehicleIdRoutes = require ('./routes/buddyVehicle_ID');
const buddyTaskIdRoutes = require ('./routes/buddyTask_ID');
const deliveryOrderStatusRoutes = require ('./routes/deliveryOrder_Status'); 
const buddyPaymentIDRoutes = require ('./routes/buddypayment_ID');


require("./database");
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })) ;



app.use('/api/buddyid', buddyIdRoutes);
app.use('/api/buddyvehicleid', buddyVehicleIdRoutes);
app.use('/api/buddytaskid', buddyTaskIdRoutes);
app.use('/api/deliveryorderstatusid', deliveryOrderStatusRoutes);
app.use('/api/buddypaymentid', buddyPaymentIDRoutes);





const port =1111;
app.listen(port, console.log(`Server is running on port ${port} `));