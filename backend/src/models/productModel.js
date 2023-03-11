const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
 

    /// genral keys

    title: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, trim: true },
    category:{type:String, required:true, trim:true},
    price: { type: Number, required: true },
    currencyId: { type: String, required: true, enum: ["INR"] },
    currencyFormat: { type: String, required: true, enum: ['₹'] },
    isFreeShipping: { type: Boolean, default: false },
    productImage: { type: String, required: true },  // s3 link
    productImageList:{ type:[String]},
    style: String,
    ratings:String,
    reviews:String,
    quantity:Number,
    comments:String,



    /// garment products

    gender:{type:String, enum:["Male","Female"]},
    availableSizes: {
        type: [String],
        // required: true,
        enum: ["S", "XS", "M", "X", "L", "XXL", "XL"]
    },
    installments: Number,
    
    
    
    
    /// Mobile //
    moduleNumber:String,
    ram:{ type:[String]},
    InternlStorage:{ type:[String]},
    processer:{type:String},
    frontcam:{type:String},
    backcam:{type:String},
    color:String,
    warranty:String,
    

    /// Laptop //

    genretion:{type:String},
    screenSize:{type:String},
    suitablelity:String,
    brand:String,

    
    
    
    deletedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },

}, { timestamps: true })


module.exports = mongoose.model("Product", productSchema)