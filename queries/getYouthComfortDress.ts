import prisma from "@/prisma/client";

export async function getYouthComfortDress() {
  return await prisma.youthComfortDress.findMany();
}
