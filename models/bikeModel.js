const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
name : {type : String , required : true},
image: {type :String , required : true},
capacity: {type :String , required : true},
fuelType : { type :String , required : true},
bookedTimeSlots : [
    {
        from : {type :String , required : true},
        to : {type :String , required : true}
    }
],

rentPerHour : {type :String , required : true}

}, {timestamps : true}
)
const bikeModel = mongoose.model('bikes' , bikeSchema)
module.exports = bikeModel