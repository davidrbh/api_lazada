import { Request, Response } from "express";
import { getItemDetail } from "../services/lazadaService";

export const fetchItemDetail = async (req: Request, res: Response) => {
  const { item_id, site } = req.query;

  if (typeof item_id !== "string" || typeof site !== "string") {
    return res.status(200).json({ message: "Invalid query parameters" });
  }

  try {
    const data = await getItemDetail(item_id, site);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ messaje: error });
  }
};
