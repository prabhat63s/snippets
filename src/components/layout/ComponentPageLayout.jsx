import Footer from "../Footer";
import Header from "../Header";
import ComponentNav from "../ComponentNav";

export default function ComponentPageLayout({ children }) {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="flex w-full h-[80vh] text-sm sticky top-16 z-10">
        <div className="hidden lg:flex lg:w-[20%] px-8 py-4 overflow-y-auto">
          {/* Components nav */}
          <ComponentNav />
        </div>
        <main className="w-full h-full lg:w-[80%] p-4 lg:px-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
