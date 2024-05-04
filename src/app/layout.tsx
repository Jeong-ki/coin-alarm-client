import type { Metadata } from "next";
import "@/assets/css/style.scss";
import AppProvider from "@/provider/AppProvider";

export const metadata: Metadata = {
  title: "Poard",
  description: "Project Management Board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
