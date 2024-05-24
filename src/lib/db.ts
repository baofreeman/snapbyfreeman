import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectMongoDB() {
  if (cachedConnection) {
    console.log("Using cached mongoDB connection");
    return cachedConnection;
  }
  try {
    const connect = await mongoose.connect(process.env.MONGOSEDB_URI as string);
    cachedConnection = connect.connection;
    console.log("New mongodb connection established");
    return cachedConnection;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
