import UrlInterface from "../interfaces/url.interface";
import mongoose, { Schema } from "mongoose";

const UrlSchema: Schema = new Schema(
  {
    longurl: { type: String, required: true },
    slug: { type: String, required: true },
    visitations: { first_visit:{type:Date,},last_visit:{type:Date,},count:{type:Number, required: true, default:0} },
    },
  {
    timestamps: true,
  }
);

export default mongoose.model<UrlInterface>("Url", UrlSchema);




