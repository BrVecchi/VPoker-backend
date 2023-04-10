import httpStatus from 'http-status';

import { Room } from '@prisma/client';

import { notFoundError } from '../../errors/not-found-error';
import roomRepository from '../../repositories/room-repository';

async function getAllRooms(): Promise<GetManyRoomsResult> {
  const rooms = await roomRepository.findAll();
  if (!rooms) throw notFoundError();

  return rooms.map(
    ({ created_at, updated_at, ...roomWithoutTimestamps }) =>
      roomWithoutTimestamps
  );
}

export async function createRoom({
  name,
  format_id,
  buyin,
  created_by,
}: CreateRoomParams): Promise<Room> {
  return roomRepository.create({
    name,
    format_id,
    buyin,
    created_by,
  });
}

export type RoomWithoutTimestamps = Omit<Room, "created_at" | "updated_at">;
export type GetManyRoomsResult = RoomWithoutTimestamps[];
export type CreateRoomParams = Pick<
  Room,
  "name" | "format_id" | "created_by" | "buyin"
>;

const roomsService = {
  getAllRooms,
  createRoom,
};

export default roomsService;
