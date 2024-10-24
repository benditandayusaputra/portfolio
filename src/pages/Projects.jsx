import Layout from "../components/Layout";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgHash from "lightgallery/plugins/hash";

export default function Projects() {
  const items = [
    {
      id: "1",
      size: "1400-800",
      src: "/projects/p-1.jpg",
      thumb: "/projects/p-1.jpg",
      desciption:
        "Self Parking: Online Parking System uses IoT with payment features and opens parking doors using QR Code and can make parking reservations.",
    },
    {
      id: "2",
      size: "1400-800",
      src: "/projects/p-2.jpg",
      thumb: "/projects/p-2.jpg",
      desciption:
        "E-Voting: Application for selecting OSIS chairman and deputy chairman online and in real time.",
    },
    {
      id: "3",
      size: "1400-800",
      src: "/projects/p-3.jpg",
      thumb: "/projects/p-3.jpg",
      desciption:
        "Website Company Profile: One example is the Banjarnegara central taxi website.",
    },
    {
      id: "4",
      size: "1400-800",
      src: "/projects/p-4.jpg",
      thumb: "/projects/p-4.jpg",
      desciption: "BesEdu: An online school management system.",
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
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
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
