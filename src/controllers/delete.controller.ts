import { NextFunction, Request, Response } from "express";
import { delete_slug } from "../services/deleteSlug";

export const delete_url = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { link } = req.params;
    let resp = await delete_slug(link);
    return res.status(200).json({
      success: resp.success,
      message: resp.message,
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: "server error" });
  }
};
