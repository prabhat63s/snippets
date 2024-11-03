import Footer from "../Footer";
import Header from "../Header";
import ComponentNav from "../ComponentNav";

export default function ComponentPageLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex w-full h-[91vh] text-sm">
        <div className="hidden lg:flex lg:w-[20%] px-8 py-4">
          {/* Components nav */}
          <ComponentNav />
        </div>
        <main className="w-full lg:w-[80%] p-4 pb-10 lg:px-8 overflow-y-auto scrollbar-hide">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
