import { Router } from 'express';

import { getRooms, postRoom } from '../controllers/rooms-controller';
import { authenticateToken } from '../middlewares/authentication-middleware';
import { validateBody } from '../middlewares/validation-middleware';
import { roomSchema } from '../schemas/room-schemas';

const roomsRouter = Router();

roomsRouter
  .all("/*", authenticateToken)
  .get("/", getRooms)
  .post("/", validateBody(roomSchema), postRoom);

export { roomsRouter };
