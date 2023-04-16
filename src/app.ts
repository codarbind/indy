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
    message: "hi 🤝 am good",
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

  import  urlRouter from "../src/routes/url"

  app.use("/encode",urlRouter)

const port = process.env.port || 3030;
app.listen(port, () => {
  console.log(`indy @ ${port}`);
});
module.exports = app;
