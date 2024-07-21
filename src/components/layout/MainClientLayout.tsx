import Header from './Header';
import Footer from './Footer';
import Gnb from './Gnb';

export default function MainClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-doc gnb_open">
      <Header />
      <main className="doc-main">
        <section className="inner-main">
          <Gnb />
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
