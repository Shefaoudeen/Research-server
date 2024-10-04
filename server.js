import express from "express";
import mongoose from "mongoose";
import { noticeRouter } from "./routes/noticesRoutes.js";
import cors from "cors";

const app = express();

const url =
  "mongodb+srv://shefaoudeen123:shefa123@cluster0.yqjmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`MongoDB database connection established successfully`);
});

app.use(cors());
app.use(express.json());

app.use("/notice", noticeRouter);

app.listen(5000, () => {
  console.log(`Server is listening`);
});
