import Joi from 'joi';

import { RoomWithoutTimestamps } from '../services/rooms-service';

export const roomSchema = Joi.object<RoomWithoutTimestamps>({
  name: Joi.string().required(),
  format_id: Joi.number().required(),
  buyin: Joi.number().required(),
});
