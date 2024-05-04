import { ReactNode } from "react";
import MainClientLayout from "./MainClientLayout";

export default function MainLayout({ children }: { children: ReactNode }) {
  // get user info (for header)

  return <MainClientLayout>{children}</MainClientLayout>;
}
