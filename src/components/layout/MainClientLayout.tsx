import Header from "./Header";
import Footer from "./Footer";

export default function MainClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container-doc">
      <Header />
      <main className="doc-main">
        <section className="inner-main">
          {/* gnb */}
          <div className="main-content">
            <article className="content-article">
              <div className="wrap_contents">{children}</div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
