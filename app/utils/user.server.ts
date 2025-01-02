import bcrypt from "bcryptjs";
import type { RegisterForm } from "./types.server";
import { prisma } from "./prisma.server";

export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  const newUser = await prisma.user.create({
    data: {
      phone: user.phone,
      password: passwordHash,
      name: user.name,
    },
  });
  return { id: newUser.id, phone: user.phone };
};
