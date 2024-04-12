import mongoose from "mongoose"; 

const connection = {}; 

export const connectDB = async () => {
  try {
    // check if connection is connected 
    if(connection.isConnected) {
      console.log("Using existing connection"); 
      return; 
    }
    // create a new connection and update connection
    const db = await mongoose.connect(process.env.MONGODB); 
    connection.isConnected = db.connections[0].readyState; 
  } catch(error) {
    console.log(error); 
    throw new Error("Error connecting to db"); 
  }
}