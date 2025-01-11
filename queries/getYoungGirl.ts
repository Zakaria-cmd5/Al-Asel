import prisma from "@/prisma/client";

export async function getYoungGirl() {
  return await prisma.youngGirl.findMany();
}
