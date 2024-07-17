import Layout from "../components/Layout";

export default function About() {
  return (
    <>
      <Layout>
        <div className="min-h-screen text-gray-100 flex flex-col items-center justify-center p-4">
          <div className="max-w-4xl w-full rounded-lg shadow-md p-8">
            {/* Avatar */}
            <div className="flex justify-center mb-8">
              <img
                src="/me-sq.png"
                alt="Bendi Tandayu Saputra"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-700 transition-transform duration-300 transform hover:scale-105"
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>

            {/* Paragraf Pertama */}
            <p
              className="mb-4 text-justify text-base md:text-lg"
              style={{ textIndent: "2em" }}
            >
              My name is Bendi Tandayu Saputra, I was born on October 25, 2002.
              I come from Indonesia and graduated from SMK Negeri 1 Bawang
              Banjarnegara, majoring in Software Engineering. Therefore, I am a
              web developer.
            </p>

            {/* Paragraf Kedua */}
            <p
              className="mb-4 text-justify text-base md:text-lg"
              style={{ textIndent: "2em" }}
            >
              I have approximately 3 years of experience in the world of
              programming. I have created many projects, especially web
              applications. I am very enthusiastic about learning new things
              about technology. I am a passionate developer with a love for
              creating beautiful and functional web applications. I have honed
              my skills in the world of programming and enjoy working on
              challenging projects while learning new technologies.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
