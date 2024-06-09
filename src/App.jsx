import "./App.css";
import Hero from "./components/Fragments/Hero";
import Navbar from "./components/Fragments/Navbar";
import Skills from "./components/Fragments/Skills";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="my-20"></div>
        <Skills />
      </main>
    </>
  );
}

export default App;
