import { Filter_Interface } from "../interfaces/url.interface";
import urlModel from "../models/urlModel";

export const delete_slug = async (link: string) => {
  try {
    let slug: string = link;
    let longurl: string = link;
    let deleted = await urlModel.deleteMany({ $or: [{ slug }, { longurl }] });
    if(deleted.deletedCount < 1)    return { success: true, message: "none found/deleted", status: 200 };
    if(deleted.deletedCount > 0) return { success: true, message: "deleted", status: 200 };
    return { success: false, message: "something went wrong", status: 400 };
  } catch (error: any) {
    return { success: false, message: "server error", status: 500 };
  }
};
