const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

//Create Order = /api/v1/order
exports.createOrder = async (req,res,next) => {

    //console.log(req.body,'Data');

    const cartItems = req.body;
    
    const amount = Number(cartItems.reduce((acc,item)=>(acc + item.product.price * item.qty),0)).toFixed(2);
    //console.log('amount',amount);

    const status = 'pending';

    const order = await orderModel.create({
        cartItems:cartItems,
        amount:amount,
        status:status,
    });

    //Updating Product quantity

    console.log('cartItems-------------',cartItems); 


    cartItems.forEach( async (item) => {

        item.product._id = new ObjectId(item.product._id.$oid);

       const product = await productModel.findById(item.product._id);

        console.log('product-------------',product); 

        product.stock = product.stock- item.qty; 
        await product.save(); 

    });

    res.json({
        success:true,
        message:'Order works!' ,
        order
    })

}