import urlModel from "../models/urlModel";

export const decode = async (slug: string) => {
  try {
    let url = await urlModel.findOne({ slug });
    console.log({ url });
    if(!url) return { data: { url }, status: 404, message:'not found' };
    return { success: true, data: { url }, status: 200 , message:'found'};
  } catch (error: any) {
    return { success: false, message: "server error", status: 500 };
  }
};
