import prisma from "@/prisma/client";

export async function getKidComfortDress() {
  return await prisma.kidComfortDress.findMany();
}
