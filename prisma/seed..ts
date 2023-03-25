// prisma/seed.ts
import { prisma } from "../src/config/db";

async function main() {
  const holdemFormat = await prisma.format.create({
    data: {
      name: "Hold'em",
      description:
        "A popular variation of poker that features community cards and two hole cards per player.",
    },
  });

  console.log(`Created format with name: ${holdemFormat.name}`);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
