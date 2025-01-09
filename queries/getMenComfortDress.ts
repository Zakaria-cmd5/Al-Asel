import prisma from "@/prisma/client";

export async function getMenComfortDress() {
  return await prisma.menComfortDress.findMany();
}
