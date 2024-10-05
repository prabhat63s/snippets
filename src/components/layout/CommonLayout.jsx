import Header from "../Header";
import Footer from "../Footer";

export default function CommonLayout({ children }) {
  return (
    <div className="">
      <Header />
      <main className="w-full px-4 lg:px-8 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
