/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/prisma/client";
import { redirect } from "next/navigation";
import z from "zod";

interface NewDressFormState {
  errors?: {
    name?: string[];
    description?: string[];
    price?: string[];
    image?: string[];
  };
  message?: string | null;
}

const newDressSchema = z.object({
  name: z
    .string()
    .min(3, "Product name is too short")
    .max(20, "Product name is too long")
    .trim(),
  description: z
    .string()
    .min(3, "Description is too short")
    .max(255, "Description is too long")
    .trim(),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), "Price must be a valid number"),
});

export async function addDressAction(
  formData: FormData,
  image: string,
  colors: string[],
  sizes: string[],
  dressLength: string[],
  mainCategory: string,
  subCategory: string
): Promise<NewDressFormState> {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;

  const validation = newDressSchema.safeParse({
    name,
    description,
    price,
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: "Please enter valid fields",
    };
  }

  await prisma.dress.create({
    data: {
      name: validation.data.name,
      description: validation.data.description,
      price: validation.data.price,
      image,
      dressLength: {
        create: dressLength.map((length) => ({ name: length })),
      },
      mainCategory: mainCategory.toUpperCase() as any,
      subCategory: subCategory.toUpperCase() as any,
      colors: {
        create: colors.map((color) => ({ name: color })),
      },
      sizes: {
        create: sizes.map((size) => ({ name: size })),
      },
    },
  });

  redirect(`/${mainCategory.toLowerCase()}`);
}
