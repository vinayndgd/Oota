var mongoose=require("mongoose");

var orderSchema= mongoose.Schema({
    apiKey:String,
    _orderer:{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    restaurantName:String,
    orderTime:{type: Date, default: Date.now},
    deliveryTime:Date,
    _deliverer:{type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    deliveryLoc:String,
    pickupLoc:String,
    deliveryStatus:{type: String, enum: ['ORDERED','SELECTED_FOR_DELIVERY','PICKED_ORDER','CANCELLED','DELIVERED'],default:'ORDERED'},
    items:[{type:String}],
    prices:[{type:Number}],
    qty:[{type:Number}]
},{collection:'order.project.collection'});



module.exports=orderSchema;