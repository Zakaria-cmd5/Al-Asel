import prisma from "@/prisma/client";

export async function getGirlDress() {
  return await prisma.girl.findMany();
}
