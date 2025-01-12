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
    code?: string[];
    image?: string[];
  };
  message?: string | null;
}

const newDressSchema = z.object({
  name: z
    .string()
    .min(3, "Product name is too short")
    .max(100, "Product name is too long") // Increased max length
    .trim(),
  description: z
    .string()
    .min(3, "Description is too short")
    .max(1000, "Description is too long") // Increased max length
    .trim(),
  code: z
    .string()
    .min(3, "Product code is too short")
    .max(50, "Product code is too long") // Increased max length
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
  const code = formData.get("code") as string;
  const price = formData.get("price") as string;

  console.log("Form Data:");
  console.log({
    name,
    description,
    code,
    price,
    image,
    colors,
    sizes,
    dressLength,
    mainCategory,
    subCategory,
  });

  const validation = newDressSchema.safeParse({
    name,
    description,
    code,
    price,
  });

  if (!validation.success) {
    console.error("Validation Errors:", validation.error.flatten().fieldErrors);
    return {
      errors: validation.error.flatten().fieldErrors,
      message: "Please enter valid fields",
    };
  }

  if (!image) {
    return {
      errors: {
        image: ["Please upload an image before submitting."],
      },
      message: "Validation failed",
    };
  }

  await prisma.dress.create({
    data: {
      name: validation.data.name,
      description: validation.data.description,
      price: validation.data.price,
      dressCode: validation.data.code,
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
