import mongoose from "mongoose";
import  express  from "express";
import { DB_Name } from "./constants.js";
import dotenv from "dotenv";
dotenv.config();
const app=express();

// app.listen(process.env.PORT,()=>
// {
//   console.log(`connect with ${process.env.PORT},${process.env.MONGODB_URL}`);
// })
// testing 
/*try {
  mongoose.connect("mongodb+srv://Db:Password@back.eqi7dob.mongodb.net/Backs")
  app.on("error",(error)=>
  {
    app.error("error",error)
    throw error
  })
  app.listen(4872,()=> 
  {
    console.log("connection on !!!!");
  })
} catch (error) {
  console.log("error on connection",error);
}*/

;(
  async ()=>{ 
  try {
    let conn=process.env.MONGODB_URL;
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
      app.on("error",(error)=>
     { 
       console.log("error",error);
       throw error
     }) 
     app.listen(process.env.PORT,()=>
     {
      console.log('listening on Port',process.env.PORT);
     })
  } catch (error) {
    console.log("error on connection",error);
    throw error;
  }
})()  //effie
