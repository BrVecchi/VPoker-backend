import { Prisma } from '@prisma/client';

import { prisma } from '../config/db';

async function findAll() {
  return prisma.room.findMany();
}

async function create(data: Prisma.RoomUncheckedCreateInput) {
  return prisma.room.create({
    data,
  });
}

const roomRepository = {
  findAll,
  create,
};

export default roomRepository;
