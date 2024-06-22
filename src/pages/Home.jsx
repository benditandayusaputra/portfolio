import Hero from "../components/Fragments/Hero.jsx";
import Skills from "../components/Fragments/Skills.jsx";
import Layout from "../components/Layout/index.jsx";

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <Hero />
          <div className="my-20"></div>
          <Skills />
        </main>
      </Layout>
    </>
  );
}
