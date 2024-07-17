import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <div className="h-[320px] lg:h-[200px]"></div>
      <Footer />
    </>
  );
}
