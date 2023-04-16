import { NextFunction, Request, Response } from "express";
import { decode } from "../services/decode";

export const decoder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { slug } = req.params;
    let resp = await decode(slug);
    if (resp.status === 500)
      return res
        .status(resp.status)
        .json({ success: false, message: resp.message });
    if (resp.data?.url === null)
      return res
        .status(resp.status)
        .json({ success: false, message: resp.message });
    if (resp.data?.url)
      return res
        .status(resp.status)
        .json({
          success: resp.success,
          message: "found",
          data: { longurl: resp.data.url.longurl },
        });

    return res
      .status(400)
      .json({ message: "something went wrong", data: {}, success: false });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: "server error" });
  }
};
