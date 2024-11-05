import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();
import path from "path";
app.use(express.json());

dotenv.config();

app.use(
  cors({
    origin: ["https://books-library-alpha.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connection to mongodb
mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });
// Defining Routes

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`server is  listening on port ${PORT}`);
});
