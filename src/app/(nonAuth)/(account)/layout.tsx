export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-doc type_empty">
      <main className="doc-main cont_login">
        <section className="inner-main">
          <div className="login-content">
            <article className="content-article">{children}</article>
          </div>
        </section>
      </main>
    </div>
  );
}
