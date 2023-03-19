const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/route')
const multer = require('multer')
const app = express()
const cors=require("cors");

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}

app.use(express.json())
app.use(multer().any())
app.use(cors(corsOptions))


mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://ayush8120:GeGo5qhr7wM6VQyg@cluster0.n1nevi5.mongodb.net/MyEcommerceSite?retryWrites=true&w=majority",{useNewUrlParser:true})
.then(()=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err))

app.use('/',route)


// app.use((req, res) => {
//     res.status(404).send({ status: false, message: "Url not found" })
// })


app.listen(process.env.PORT ||3001,function ()
{console.log("Express app is running on port "+(process.env.PORT ||3001))})
