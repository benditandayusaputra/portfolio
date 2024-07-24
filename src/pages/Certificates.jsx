import Layout from "../components/Layout";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgHash from "lightgallery/plugins/hash";

export default function Certificates() {
  const items = [
    {
      id: "1",
      size: "1400-800",
      src: "/certificates/lks_kabupaten.jpg",
      thumb: "/certificates/lks_kabupaten.jpg",
      desciption:
        "Banjarnegara Regency LKS 2020 in the Field of Web Technology",
    },
    {
      id: "2",
      size: "1400-800",
      src: "/certicates/lks_provinsi.jpg",
      thumb: "/certicates/lks_provinsi.jpg",
      desciption:
        "Central Java Province LKS 2021 in the Field of Web Technology",
    },
    {
      id: "3",
      size: "1400-800",
      src: "/certicates/iitf_amikom.jpg",
      thumb: "/certicates/iitf_amikom.jpg",
      desciption:
        "Intermedia Information Technology Festival 2019 at Amikom University",
    },
    {
      id: "4",
      size: "1400-800",
      src: "/certificates/olimpiade_stimik_antar_bangsa.jpg",
      thumb: "/certificates/olimpiade_stimik_antar_bangsa.jpg",
      desciption: "Programming Olympiad 2020 at STMIK Antar Bangsa",
    },
    {
      id: "5",
      size: "1400-800",
      src: "/certificates/pyp.jpg",
      thumb: "/certificates/pyp.jpg",
      desciption: "Permata Youth Preneur 2020",
    },
    {
      id: "6",
      size: "1400-800",
      src: "/certificates/nyia_lipi.jpg",
      thumb: "/certificates/nyia_lipi.jpg",
      desciption:
        "NYIA(National Young Inventors Award) 2020 at Indonesian Institute of Sciences",
    },
    {
      id: "7",
      size: "1400-800",
      src: "/certificates/qc.jpg",
      thumb: "/certificates/qc.jpg",
      desciption:
        "QC (Quality Control) Application E-Voting For OSIS Voting System 2019 at SMK Negeri 1 Bawang",
    },
    {
      id: "8",
      size: "1400-800",
      src: "/certificates/sertifikat_ujikom.jpg",
      thumb: "/certificates/sertifikat_ujikom.jpg",
      desciption:
        "Basic Programming Cluster Competency Certificate from the Indonesia Professional Certification Authority 2021",
    },
  ];
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <>
      <Layout>
        <div className="py-10 lg:px-15 md:px-15 px-10">
          <LightGallery
            onInit={onInit}
            speed={500}
            selector={"a"}
            thumbnails={true}
            plugins={[lgThumbnail, lgZoom, lgHash]}
          >
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.src}
                  className="flex justify-center"
                  data-sub-html={`<h4>${item.desciption}</h4>`}
                >
                  <img
                    alt={item.id}
                    src={item.thumb}
                    className="w-full h-auto object-cover"
                  />
                </a>
              ))}
            </div>
          </LightGallery>
        </div>
      </Layout>
    </>
  );
}
