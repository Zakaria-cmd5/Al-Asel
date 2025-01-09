import prisma from "@/prisma/client";

export async function getYouthClothes() {
  return await prisma.youth.findMany();
}
