import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import userRoute from './route/user.route.js'
const app = express();
app.use(express.json())

dotenv.config();
const PORT = process.env.PORT || 4000;
console.log(`Using PORT: ${PORT}`);
const URI = process.env.MongoDBURI;

app.use(cors({
  origin: '', // Replace with your front-end domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

// connection to mongodb
mongoose.connect(URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });
// Defining Routes

app.use("/book", bookRoute);
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`server is  listening on port ${PORT}`);
});

