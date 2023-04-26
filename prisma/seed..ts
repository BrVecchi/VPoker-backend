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

  const omahaFormat = await prisma.format.create({
    data: {
      name: "Omaha Hi",
      description:
        "A derivative of Pot Limit Omaha where it is possible to win the pot in two different ways: either the usual way of holding the strongest hand (High), or by making the weakest possible hand (Low).",
    },
  });

  console.log(`Created format with name: ${omahaFormat.name}`);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
