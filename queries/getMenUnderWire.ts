import prisma from "@/prisma/client";

export async function getMenUnderWire() {
  return await prisma.menUnderWire.findMany();
}
