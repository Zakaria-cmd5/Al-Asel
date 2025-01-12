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
    colors?: string[];
    sizes?: string[];
    dressLength?: string[];
    mainCategory?: string[];
    subCategory?: string[];
  };
  message?: string | null;
}

const newDressSchema = z.object({
  name: z
    .string()
    .min(3, "Product name is too short")
    .max(100, "Product name is too long")
    .trim(),
  description: z
    .string()
    .min(3, "Description is too short")
    .max(1000, "Description is too long")
    .trim(),
  code: z
    .string()
    .min(3, "Product code is too short")
    .max(50, "Product code is too long")
    .trim(),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), "Price must be a valid number"),
});

export async function addDressAction(payload: {
  formData: FormData;
  image: string;
  colors: string[];
  sizes: string[];
  dressLengths: string[];
  mainCategory: string;
  subCategory: string;
}): Promise<NewDressFormState> {
  const {
    formData,
    image,
    colors,
    sizes,
    dressLengths,
    mainCategory,
    subCategory,
  } = payload;

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const code = formData.get("code") as string;
  const price = formData.get("price") as string;

  const validation = newDressSchema.safeParse({
    name,
    description,
    code,
    price,
  });

  const errors: NewDressFormState["errors"] = {};

  if (!validation.success) {
    Object.assign(errors, validation.error.flatten().fieldErrors);
    return {
      errors,
      message: "Please correct the highlighted errors.",
    };
  }

  if (!image) {
    errors.image = ["Please upload an image."];
  }

  if (colors.length === 0) {
    errors.colors = ["Please add at least one color."];
  }

  if (sizes.length === 0) {
    errors.sizes = ["Please add at least one size."];
  }

  if (dressLengths.length === 0) {
    errors.dressLength = ["Please add at least one dress length."];
  }

  if (!mainCategory) {
    errors.mainCategory = ["Please select a main category."];
  }

  if (!subCategory) {
    errors.subCategory = ["Please select a sub-category."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      message: "Please correct the highlighted errors.",
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
        create: dressLengths.map((length) => ({ name: length })),
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
