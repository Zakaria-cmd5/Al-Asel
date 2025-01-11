import prisma from "@/prisma/client";

export async function getAllDress(
  mainCategory: "MEN" | "WOMEN" | "YOUTH" | "KID",
  subCategory:
    | "THOUB"
    | "UNDER_WIRE"
    | "WINTER_PAJAMAS"
    | "SUMMER_PAJAMAS"
    | "COMFORT_THOUB"
    | "WINTER_THOUB"
) {
  return await prisma.dress.findMany({
    where: {
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
