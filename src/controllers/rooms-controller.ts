import { Request, Response } from 'express';
import httpStatus from 'http-status';

import { AuthenticatedRequest } from '../middlewares/authentication-middleware';
import roomsService from '../services/rooms-service';

export async function getRooms(_req: Request, res: Response) {
  try {
    const room = await roomsService.getAllRooms();
    return res.status(httpStatus.OK).send(room);
  } catch (error) {
    return res.status(httpStatus.NOT_FOUND).send({});
  }
}

export async function postRoom(req: AuthenticatedRequest, res: Response) {
  const { name, format_id, buyin } = req.body;

  try {
    await roomsService.createRoom({
      name,
      format_id,
      created_by: req.userId,
      buyin,
    });

    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
