import MainClientLayout from "./MainClientLayout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get user info (for header)

  return <MainClientLayout>{children}</MainClientLayout>;
}
