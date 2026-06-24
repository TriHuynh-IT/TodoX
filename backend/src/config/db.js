import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("kết nối CSDL thành công!");
  } catch {
    console.error("kết nối CSDL thất bại!", error);
    process.exit(1); //exit with error
  }
};
