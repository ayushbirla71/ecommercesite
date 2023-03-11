const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ 
    fname: {type:String, required:true,trim:true},
    lname: {type:String, required:true,trim:true},
    email: {type:String, required:true, unique:true,trim:true},
    gender:{type:String, required:true,enum:['Male','Female']},
     profileImage: {type:String ,default:'https://www.pngitem.com/pimgs/m/78-786501_black-avatar-png-user-icon-png-transparent-png.png'}, // s3 link
    phone: {type:String, required:true, unique:true,trim:true}, 
    password: {type:String, required:true, minLen : 8, maxLen : 15,trim:true}, // encrypted password
    address: {type:Object,
      shipping: {type:Object,
        street: {type:String, required:true,trim:true},
        city: {type:String, required:true,trim:true},
        pincode: {type:Number, required:true},
      },
      billing: {type:Object,
        street: {type:String, required:true,trim:true},
        city: {type:String, required:true,trim:true},
        pincode: {type:Number, required:true},
      }
    }
  },{timestamps:true})

  module.exports = mongoose.model("User",userSchema)