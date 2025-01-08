import prisma from "@/prisma/client";

export const getAlAseelClothes = async () => {
  return await prisma.men.findMany();
};
