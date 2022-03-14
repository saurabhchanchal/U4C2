const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectDB = () => {
    return mangoose.connect("mongodb://localhost:27017/databaseName");
}


const userSchema = mangoose.Schema({
    first_name : {type :String, required: true},
    last_name : String,
    age : Number,
    email : String,
    Gender: {type: String, enum:"male" || "Female"},
    createAt : {type : Date, default : Date.now, required : true},
    address : String,
    upadateAt : {type : Date, default : Date.now, required : true}
});


app.listen(5000,async() => {
    try {
        await connectDB();
        console.log("listening at 5000");
    }
    catch(error) {
        console.log('error:', error)
        
    }
});