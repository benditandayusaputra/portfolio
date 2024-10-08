import Layout from "../components/Layout";
import { FaBriefcase, FaBook } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Layout>
        <div className="text-white flex flex-col items-center justify-center px-4 py-0 mt-10">
          <div className="max-w-4xl w-full px-8 py-0">
            <div className="flex justify-center mb-8">
              <img
                src="/me-sq.png"
                alt="Bendi Tandayu Saputra"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-700 transition-transform duration-300 transform hover:scale-105"
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>

            <p
              className="mb-4 text-justify text-base md:text-lg"
              style={{ textIndent: "2em" }}
            >
              My name is Bendi Tandayu Saputra, I was born on October 25, 2002.
              I come from Indonesia and graduated from SMK Negeri 1 Bawang
              Banjarnegara, majoring in Software Engineering. Therefore, I am a
              web developer.
            </p>

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
        <div className="sm:p-6 max-w-4xl mx-auto sm:mt-4 sm:px-8 py-10">
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 items-center">
            <div className="mb-4 sm:mb-0 sm:w-1/2 text-center sm:text-left">
              <div className="flex flex-row items-center justify-center sm:items-start sm:justify-start mb-2 sm:mb-4">
                <FaBriefcase className="text-white text-2xl sm:text-3xl mr-2 sm:mb-2 sm:mb-0" />
                <div className="text-white text-xl sm:text-2xl font-semibold">
                  EXPERIENCE
                </div>
              </div>
              <div className="mb-4 mx-5 sm:mx-0">
                <h3 className="font-bold text-lg">PKL</h3>
                <ul className="list-disc list-inside px-5 text-left">
                  <li>Galaxy Digital Printing</li>
                  <li>PT Traspac</li>
                </ul>
              </div>
              <div className="mb-4 mx-5 sm:mx-0">
                <h3 className="font-bold text-lg">Competition</h3>
                <ul className="list-disc list-inside ml-4 text-left">
                  <li>LKS Web Technology (Kabupaten & Provinsi)</li>
                  <li>
                    National Young Inventors Award (NYIA) - Kompetisi LIPI
                  </li>
                  <li>Permata YouthPreneur 2020</li>
                  <li>Olimpiade Programming STMIK Antar Bangsa</li>
                  <li>Intermedia Technology Festival (IITF) - Web Design</li>
                </ul>
              </div>
            </div>
            <div className="sm:w-1/2 text-center sm:text-right">
              <div className="flex flex-row items-center justify-center sm:flex-row sm:items-start sm:justify-end mb-4">
                <FaBook className="text-white text-2xl sm:text-3xl mr-2 sm:mb-2 sm:mb-0" />
                <div className="text-white text-xl sm:text-2xl font-semibold">
                  EDUCATION
                </div>
              </div>
              <div>
                <p className="mb-2 sm:mb-4">
                  2008 - 2009 | <strong>Kindergarten</strong>
                  <br />
                  <span className="ml-4">Cokroaminoto 2 Bondolharjo</span>
                </p>
                <p className="mb-2 sm:mb-4">
                  2009 - 2015 | <strong>Elementary School</strong>
                  <br />
                  <span className="ml-4">Negeri 1 Bondolharjo</span>
                </p>
                <p className="mb-2 sm:mb-4">
                  2015 - 2018 | <strong>Junior High School</strong>
                  <br />
                  <span className="ml-4">Negeri 1 Wanadadi Banjarnegara</span>
                </p>
                <p className="mb-2 sm:mb-4">
                  2018 - 2021 | <strong>Vocational School</strong>
                  <br />
                  <span className="ml-4">Negeri 1 Bawang Banjarnegara</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
