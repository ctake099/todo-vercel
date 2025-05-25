import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
    // ✅ Prepared statements を無効化
    datasources: {
      db: {
        url: process.env.DATABASE_URL + '&pgbouncer=true', // 明示的に追記しておく
      },
    },
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}