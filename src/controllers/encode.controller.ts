import { NextFunction, Request, Response } from "express";
import { encode } from "../services/encode.service";

export const encoder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { longurl } = req.body;
    let resp = await encode(longurl);
    return res
      .status(resp.status || 200)
      .json({
        success: resp.success,
        message: resp.message || "url shortened",
        data: { url: { slug: resp.doc?.slug, long: resp.doc?.longurl } },
      });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: "server error" });
  }
};

