import prisma from "@/prisma/client";

export async function getOneDress(
  mainCategory: "MEN" | "WOMEN" | "YOUTH" | "KID",
  subCategory:
    | "THOUB"
    | "UNDER_WIRE"
    | "WINTER_PAJAMAS"
    | "SUMMER_PAJAMAS"
    | "COMFORT_THOUB"
    | "WINTER_THOUB",
  id: number
) {
  return await prisma.dress.findFirst({
    where: {
      id,
      mainCategory,
      subCategory,
    },
    include: {
      colors: true,
      sizes: true,
      dressLength: true,
    },
  });
}
