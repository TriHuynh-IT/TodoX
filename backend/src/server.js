import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

//middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/task", taskRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log("server bắt đầu chạy trên cổng 5001");
  });
});
