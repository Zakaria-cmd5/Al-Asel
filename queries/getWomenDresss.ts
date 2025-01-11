import prisma from "@/prisma/client";

export async function getWomenDress() {
  return await prisma.women.findMany();
}
