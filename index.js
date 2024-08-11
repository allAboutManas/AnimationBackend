import express from "express";
import mongoose from "mongoose";
import router from "./routes/route.js";

const app = express();
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://rmmanasraj:nFW8nWBf0co6AYXZ@cluster0.psckb8w.mongodb.net/AASTHA?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
    app.listen(8000, () => {
      console.log("Server Started at Port", 8000);
    });
  })
  .catch((err) => console.log(err));

app.use("/", router);