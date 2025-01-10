import prisma from "@/prisma/client";

export async function getKidUnderwire() {
  return await prisma.kidUnderWire.findMany();
}
