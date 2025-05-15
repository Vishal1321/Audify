const express =require("express");
const app=express();
const cookieParser=require("cookie-parser")
const cors= require("cors")
const userApi=require("./routes/user")
const catApi=require("./routes/categories")
const PodcastApi=require("./routes/podcasts")

require("dotenv").config();
require("./conn/conn")
app.use(express.json());
app.use(cookieParser());
app.use("/uploads",express.static("uploads"))
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))
//all routes
app.use("/api/v1",userApi)
app.use("/api/v1",catApi)
app.use("/api/v1",PodcastApi)



app.listen(process.env.PORT,()=>{
    console.log(`Server Started on port :${process.env.PORT}`);
});