import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login");
  }
  return children;
}
