import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createResult = await prisma.post.create({
    data: {
      title: "ルームメイト10名募集!",
      content: "部屋に空きができたので、ルームメイト(男性女性どちらでも)を10人募集します。",
    },
  });
  console.log({ createResult });

  const updateResult = await prisma.post.update({
    where: { id: createResult.id },
    data: {
      title: "ルームメイト1名募集!",
      content: "部屋に空きができたので、ルームメイト(男性女性どちらでも)を1人募集します。",
    },
  });
  console.log({ updateResult });

  const allPosts = await prisma.post.findMany();
  console.log({ allPosts });

  await prisma.post.deleteMany({});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
