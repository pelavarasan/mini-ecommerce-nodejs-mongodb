const productModel = require('../models/productModel')

// Get Products API = /api/v1/products
exports.getProducts = async(req,res,next) =>{

    try{
        const products = await productModel.find();

        res.json({
            success:true,
            message:'Get products working!', 
            products:products
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:'Unable to get products'
        })
    }
    
}
// Get Single Product API = /api/v1/product/id
exports.getSingleProducts =async(req,res,next) =>{


    try{
        const product = await productModel.findById(req.params.id);

        console.log(req.params.id,'ID')
        res.json({
            success:true,
            message:'Get Single products working!',
            product:product
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:'Unable to get product'
        })
    }
} 