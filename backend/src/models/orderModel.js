const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema=new mongoose.Schema({
    userId: { type: ObjectId, required: true , ref: "User" },
    items: [{
        // _id:{id:false},
        productId: {
            type : ObjectId,
            ref: "Product",
            required: true
        },
        quantity: { type: Number, required: true, default:1 },
        status:{type:String,default:'pending',enum:['pending','completed','cancelled']},
    }],
    totalPrice:{type:Number,required:true,},
    totalItems:{type:Number,required:true},
    totalQuantity:{type:Number,required:true},
    cancellable:{type:Boolean,default:true},
    status:{type:String,default:'pending',enum:['pending','completed','cancelled']},
    deletedAt:{type:Date,default:null},
    isDeleted:{type:Boolean,default:false}

},{timestamps:true})

module.exports=mongoose.model('Order',orderSchema)