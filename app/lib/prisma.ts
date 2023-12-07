import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// prisma = new PrismaClient();

//シングルトンという書き方
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

if(!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient();
};

prisma = globalForPrisma.prisma;

export default prisma;