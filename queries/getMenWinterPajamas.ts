import prisma from "@/prisma/client";

export async function getMenWinterPajamas() {
  return await prisma.menWinterPajamas.findMany();
}
