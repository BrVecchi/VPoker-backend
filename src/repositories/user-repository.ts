import { Prisma } from '@prisma/client';

import { prisma } from '../config';

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };
  return prisma.user.findUnique(params);
}

const userRepository = {
  findByEmail,
  create,
};

export default userRepository;
