import { PrismaClient } from '@prisma/client';

// single client instance, reused across the project
export const prisma = new PrismaClient();

// closes the connection when the process exits
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});