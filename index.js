import express from "express";
import mongoose from "mongoose";

import router from "./router.js";

const PORT = 5000;
const DB_URL = "mongodb://127.0.0.1:27017/db1";

const app = express();

app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    app.listen(PORT, () => {
      console.log("Server started on port ", PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
