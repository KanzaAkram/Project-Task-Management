// import express from "express";
// import api from './routes/index.js'
// import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import cors from "cors";

// dotenv.config()
// mongoose.connect(process.env.MONGODB_PATH, () => {
//     console.log('connect');
// }, (e) => console.log(e))


// const PORT = process.env.SERVER_PORT || 9000
// const origin = process.env.CORS_ORIGIN || 'http://localhost:3000'

// const app = express()

// app.use(cors({
//     origin
// }));
// app.use(express.json())
// app.use(express.urlencoded())

// app.use(api)

// app.listen(PORT, () => {
//     console.log(`Your app is running in http://localhost:${PORT}`)
// })

import express from "express";
import api from "./routes/index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const PORT = process.env.SERVER_PORT || 9000;
const origin = process.env.CORS_ORIGIN || "http://localhost:3000";

const app = express();

app.use(
  cors({
    origin,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api);

const startServer = (port) => {
  app
    .listen(port, () => {
      console.log(`Your app is running at http://localhost:${port}`);
    })
    .on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.log(`Port ${port} is in use, trying another port...`);
        startServer(port);
      } else {
        console.error("Server error:", err);
      }
    });
};

startServer(PORT);
