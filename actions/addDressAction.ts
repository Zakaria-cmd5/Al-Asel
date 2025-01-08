'use server'

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
  dressLength: string[]
): Promise<NewDressFormState> {
  const name = formData.get("name");
  const description = formData.get("description");
  const price = formData.get("price");

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

  await prisma.men.create({
    data: {
      colors: colors.join(", "),
      size: sizes.join(", "),
      dressLength: dressLength.join(", "),
      description: validation.data.description,
      name: validation.data.name,
      price: validation.data.price,
      image,
    },
  });

  redirect("/men");
}