import urlModel from "../models/urlModel";
import { update_stats } from "./stats";

export const decode = async (slug: string) => {
  try {
    let url = await urlModel.findOne({ slug });
    if(!url) return { data: { url }, status: 404, message:'not found' };
    update_stats(slug)
    return { success: true, data: { url }, status: 200 , message:'found'};
  } catch (error: any) {
    return { success: false, message: "server error", status: 500 };
  }
};
