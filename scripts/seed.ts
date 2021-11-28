import { PrismaClient, Todo } from '@prisma/client';
import { lorem } from 'faker';

const prisma = new PrismaClient();

async function createTodoList() {
  const todos = Array(30)
    .fill('')
    .map<Omit<Todo, 'id'>>((_, idx) => ({
      title: lorem.sentence(),
      checked: false,
    }));

  await prisma.todo.createMany({
    data: todos,
  });
}

async function main() {
  await createTodoList();

  await prisma.$disconnect();
}

main()
  .then(() => {
    console.log('🌱 Seeded db');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
