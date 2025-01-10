import prisma from "@/prisma/client";

export async function getKidWinterPajamas() {
  return await prisma.kidWinterPajamas.findMany();
}
