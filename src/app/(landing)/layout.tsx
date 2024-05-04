import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-landing">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
