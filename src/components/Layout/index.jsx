import Footer from "../Fragments/Footer";
import Navbar from "../Fragments/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
