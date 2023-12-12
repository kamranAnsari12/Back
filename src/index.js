import dotenv from "dotenv";

import App from "./App.js";
import connectDb from "./db/index.js";
dotenv.config();
connectDb().then(()=>
{
 App.listen(process.env.PORT,()=>{ console.log(` Server is connected at ${process.env.PORT}`)})
}).catch((error)=>
{
  console.log(`error caught ${error}`);
});


 
// const app=express();


//below commented code will work fine just commented to get new ways to connection

/*
;(
  async ()=>{ 
  try {
    // let conn=process.env.MONGODB_URL;
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
*/