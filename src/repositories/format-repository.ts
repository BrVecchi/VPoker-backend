import { prisma } from "../config";

async function findAll() {
  return prisma.format.findMany({});
}

const formatRepository = {
  findAll,
};

export default formatRepository;
