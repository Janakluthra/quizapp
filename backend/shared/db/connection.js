import mongoose from "mongoose";
export const createConnection = async () => {
  try {
    const result = await mongoose.connect(
      "mongodb+srv://janak_luthra:Janakluthra123@cluster0.ftonohe.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("db connection is done ");
    return result;
  } catch (err) {
    console.log("db connection is fail");
    throw err;
  }
};
