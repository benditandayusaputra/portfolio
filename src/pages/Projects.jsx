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
      desciption: "Self Parking",
    },
    {
      id: "2",
      size: "1400-800",
      src: "/projects/p-2.jpg",
      thumb: "/projects/p-2.jpg",
      desciption: "E-Voting",
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
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
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
