'use server'

import { prisma } from '@/lib/prisma'

export async function getTodos() {
  return await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export async function addTodo(title: string) {
  await prisma.todo.create({ data: { title } })
}