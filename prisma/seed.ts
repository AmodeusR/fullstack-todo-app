import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const todosArray = ["Fazer um bolo", "Estudar japonês", "Ir passear com as cachorras", "Lembrar de ir para o compromisso marcado"]

  todosArray.forEach(async todo => await prisma.todo.create({
    data: {
      description: todo
    }
  }));
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });