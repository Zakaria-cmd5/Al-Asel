import prisma from "@/prisma/client";

export async function getKidDress() {
  return await prisma.kid.findMany();
}
