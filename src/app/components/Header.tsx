"use client";
import { faGithub, faInstagram, faLinkedin, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import SoftwareEngineerImage from '../pictures/SoftEngg.png';


const icons = [
  {
    icon: faGithub,
    color: "#000000"
  },
  {
    icon: faLinkedin,
    color: "#0077B5"
  },
  {
    icon: faInstagram,
    color: "#d62976"
  },
  {
    icon: faEnvelope,
    color: "#52a447"
  },
];

const Header: React.FC = () => {


  // Setting up hover properties for brand icons
  const [hoverStates, setHoverStates] = useState(Array(icons.length).fill(false));

  const handleMouseEnter = (index: number): void => {
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    })
  };

  const handleMouseLeave = (index: number): void => {
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    })
  };


  return (
    <div className="py-12 pl-20 flex items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold">Full Stack Developer -</h1>
        <h1 className="text-4xl md:text-6xl mt-5 font-bold">Joby Mathew</h1>
        <div className="mt-10 w-[600px]">
          <p className="text-gray-500 dark:text-white text-[1.5rem]">
            Hello there! I am an experienced Full-Stack Developer specialized in Javascript and its frameworks. I have extensive experience building reliable web and mobile applications.
          </p>
        </div>
        <div className="flex mt-10">
          {icons.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-14 h-14 hover:bg-primary rounded-full mr-5 cursor-pointer"
              style={{
                backgroundColor: hoverStates[index] ? '#E97451' : item.color,
                transition: 'color 0.3s',
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <FontAwesomeIcon icon={item.icon} className="text-white" size="2x" />
            </div>
          ))}
        </div>
        <a
          href="#"
          className="border border-primary bg-primary py-2 px-4 mt-6 inline-block rounded text-white mr-10 transition duration-300 ease-in-out hover:bg-transparent hover:text-primary hover:shadow-lg"
        >
          CONTACT ME
        </a>
        <a
          href="#"
          className="border border-primary bg-primary py-2 px-4 mt-6 inline-block rounded text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-primary hover:shadow-lg"
        >
          SEE MY RESUME
        </a>

      </div>
      <div className="ml-20">
        <Image
          src={SoftwareEngineerImage}
          alt="Software Engineer"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Header;