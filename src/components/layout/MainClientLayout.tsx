import { ReactNode } from "react";

export default function MainClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="container-doc">
      {/* header */}
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
    </div>
  );
}
