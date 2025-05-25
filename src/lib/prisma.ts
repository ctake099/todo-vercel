import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'],
  // ここで prepared statements を無効化
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
})