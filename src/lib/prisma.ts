import { PrismaClient } from '@/generated/prisma';

export const prisma = new PrismaClient({
  log: ['query'],
  // ここで prepared statements を無効化
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})