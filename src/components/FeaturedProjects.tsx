import React from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedProjects: React.FC = () => {
  const featuredProjects = [
    {
      url: "/resources/assets/proj1.png",
      link: "/link1",
      title: "Title 1",
      description: "Description 1",
      smallText: "Small Text 1",
    },
    {
      url: "/resources/assets/proj1.png",
      link: "/link2",
      title: "Title 2",
      description: "Description 2",
      smallText: "Small Text 2",
    },
    {
      url: "/resources/assets/proj1.png",
      link: "/link3",
      title: "Title 3",
      description: "Description 3",
      smallText: "Small Text 3",
    },
  ];

  return (
    <div className="flex flex-col space-y-4 justify-center items-center mb-10 mt-10">
      {featuredProjects.map((item, index) => (
        <Link href={item.link} key={index} passHref>
          <div className="relative w-[550px] h-[320px] cursor-pointer">
            <Image
              src={item.url}
              alt={item.title}
              width={550}
              height={320}
              objectFit="cover"
            />
            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h3 className="text-white font-bold">{item.title}</h3>
              <p className="text-white">{item.description}</p>
              <small className="text-white">{item.smallText}</small>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProjects;
