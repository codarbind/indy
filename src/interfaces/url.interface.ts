import { Document } from "mongoose";

export default interface UrlInterface extends Document {
  longurl: string;
  slug: string;
  visitations: {first_visit:string,last_visit:string,count:number};
  deleted: boolean;
  _id?: string;
  createdAt?: string;
}