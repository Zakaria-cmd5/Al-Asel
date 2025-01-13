"use server";

import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

interface CreateUserType {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  userName: string | null;
  image: string | null;
}

export async function createUserAction(user: CreateUserType) {
  try {
    await prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
        userName: user.userName,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ success: "User Created" }, { status: 201 });
}
