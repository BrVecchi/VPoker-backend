import { Request, Response } from "express";
import httpStatus from "http-status";

import formatsService from "../services/formats-service";

export async function getFormats(_req: Request, res: Response) {
  try {
    const formats = await formatsService.getFormats();
    return res.status(httpStatus.OK).send(formats);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
