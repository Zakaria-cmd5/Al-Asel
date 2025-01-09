import prisma from "@/prisma/client";

export async function getYouthUnderwire() {
  return await prisma.youthUnderWire.findMany();
}
