import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./configs/dbconfig";

const app = express();
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/health", async (req, res) => {
  res.status(200).json({
    message: "hi 🤝 I am good",
  });
});


/**connect to mongoose */
mongoose.set('strictQuery' , true)
mongoose
  .connect(config.mongo.url!, config.mongo.options)
  .then((result) => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log("didnt connect to db, ", err);
  });

  import  encodeUrlRouter from "./routes/encodeUrl"
  import decodeUrlRouter from "./routes/decodeUrl"
  import deleteUrlRouter from "./routes/deleteUrl"
  

  app.use("/encode",encodeUrlRouter)
  app.use("/decode",decodeUrlRouter)
  app.use("/delete",deleteUrlRouter)

const port = process.env.port || 3030;
app.listen(port, () => {
  console.log(`indy @ ${port}`);
});
module.exports = app;
