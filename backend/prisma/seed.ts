import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await argon2.hash(process.env.SEED_ADMIN_PASSWORD!);

  await prisma.administrator.upsert({
    where: { email: process.env.SEED_ADMIN_EMAIL! },
    update: {},
    create: {
      name: "Admin Master",
      email: process.env.SEED_ADMIN_EMAIL!,
      passwordHash,
    },
  });

  console.log("Admin inicial criado/verificado.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());