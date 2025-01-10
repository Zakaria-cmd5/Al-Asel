import prisma from "@/prisma/client";

export async function getKidWinterDress() {
  return await prisma.kidWinterDress.findMany();
}
