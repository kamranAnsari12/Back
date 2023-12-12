import mongoose  from "mongoose";
import dotenv from "dotenv";
import { DB_Name } from "../constants.js";

dotenv.config();

const connectDb=async()=>
{
  try {
   const ConnectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
    console.log(`\n connect is  created  host:!!!!   !!!! ${ConnectionInstance.connection.host}`);
    console.log(`\n hurray its urgent port: !!!!! ${ConnectionInstance.connection.port} `);
  } catch (error) {
    console.log("error",error);
    throw error
    
  }
}

export default connectDb;