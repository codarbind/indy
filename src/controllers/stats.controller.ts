import { NextFunction, Request, Response } from "express";
import { get_stats } from "../services/stats.service";

export const stats_agg = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { slug } = req.params;
    let resp = await get_stats(slug);
    if (resp.status === 500)
      return res
        .status(resp.status)
        .json({ success: false, message: resp.message });
    if (resp.data?.stats === null)
      return res
        .status(resp.status)
        .json({ success: false, message: resp.message });
    if (resp.data?.stats)
      return res
        .status(resp.status)
        .json({
          success: resp.success,
          message: "found",
          data: { stats: resp.data.stats },
        });

    return res
      .status(400)
      .json({ message: "something went wrong", data: {}, success: false });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: "server error" });
  }
};
