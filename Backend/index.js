

// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import bookRoute from "./route/book.route.js";
// import userRoute from "./route/user.route.js";

// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// // Connect to MongoDB
// mongoose.connect(URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.log("Error connecting to MongoDB:", error));

// // Defining Routes
// app.use("/book", bookRoute);
// app.use("/user", userRoute);

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"; // Import path module
import { fileURLToPath } from 'url'; // Import for URL conversion
import { dirname } from 'path'; // Import for path manipulation
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Connect to MongoDB
mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build'))); // Adjust the path as necessary

// The catch-all handler: for any request that doesn't match one above, send back index.html.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html')); // Adjust the path as necessary
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
