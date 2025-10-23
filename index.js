const express = require("express");
const mongoose = require("mongoose");
const {courseRouter } = require("./routes/course");
const {UserRouter} = require("./routes/user")
const app = express();
app.use("/user",UserRouter);
app.use("/course",courseRouter);

app.listen(3000,()=>{
    console.log("Server is Running at port 3000");
});