import Image, { StaticImageData } from "next/image";
import IODLogo from '../pictures/IOD.png';
import Wizroots from '../pictures/wizroots.jpeg';
import SCSLogo from '../pictures/SCS Logo_RGB.png';
import Capsule from '../pictures/capsuleLabs.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

let imageUrl = 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg';

interface JobCardProps {
  logo: StaticImageData;
  companyName: string;
  bg: string;
  position: string;
  dates: string;
  description: string;
  responsibilities: string[];
  remote: string;
}

const JobCard: React.FC<JobCardProps> = ({ logo, companyName, bg, position, dates, description, responsibilities, remote }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden mx-4 my-6">
      <div className="relative p-4 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        
        {/* Overlay Container */}
        <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

        {/* Content over the overlay */}
        <div className="relative z-10 text-center">
          <h3 className="text-lg text-white font-semibold">{companyName}</h3>
          <div className="flex justify-center mt-2">
            <Image src={logo} alt={companyName} className="rounded-full h-24 w-24" />
          </div>
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-lg font-bold">{position}</h4>
        <p className="text-gray-500">{dates}</p>
        <p className="mt-2">{description}</p>
        <ul className="mt-2">
          {responsibilities.map((item: string, index: number) => (
            <li key={index} className="flex items-center">
              <FontAwesomeIcon icon={faLaptop} className="text-[rgb(233,116,81)] mr-2" /> {/* Change icon as needed */}
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4">{remote}</p>
      </div>
    </div>
  );
};


const experiences = [
  {
    logo: SCSLogo,
    companyName: 'Safer Community Security',
    bg: 'https://iprasecurity.com/wp-content/uploads/2024/05/electronic-service.jpg',
    position: 'Web Developer',
    dates: 'Sept 2024 – Present',
    description: 'Development of Company Website by making use of Wordpress',
    responsibilities: [
      'Elementor Website Development',
      'Adobe Photoshop & Figma',
      'Project Management',
    ],
    remote: 'Perth, WA 🦘',
  },
  {
    logo: Capsule,
    companyName: 'Capsule Labs',
    bg: 'https://builtin.com/sites/www.builtin.com/files/2024-10/Blockchain%20Technology%20from%20Builtin.jpg',
    position: 'Junior Full Stack Developer',
    dates: 'May 2022 – Nov 2022',
    description: 'Lead, development & setup of a digital product. Used Flutter, Nest.js (Node), Docker and Flow Blockchain',
    responsibilities: [
      'Admin dashboard',
      'WebApp, Android & iOS apps',
      'Blockchain NFTs',
    ],
    remote: 'Perth, WA 🦘',
  },
  {
    logo: IODLogo,
    companyName: 'Institue of Data',
    bg: 'data:image/jpeg;base64,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',
    position: 'Software Engineering Trainer',
    dates: 'Sept 2023 – Sept 2024',
    description: 'Assistant Trainer for Software Engineering Course. Used HTML, CSS, Javascript, React.js, MySQL & AWS',
    responsibilities: [
      'WebApps',
      'Website Development and Deployment',
      'Software Engineering Basics',
    ],
    remote: 'Fully Remote 🌍',
  },
  {
    logo: Wizroots,
    companyName: 'Wizroots Technologies',
    bg: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    position: 'Software Engineer',
    dates: 'Jul 2021 – Dec 2021',
    description: 'Development & setup of multiple mobile applications. Used React Native & Flutter',
    responsibilities: [
      'Android & iOS apps',
      'React.js Website Development',
      'Project Lead',
    ],
    remote: 'Fully Remote 🌍',
  },
  // Add more experience objects as needed
];

const Experience: React.FC = () => {
  return (
    <div className="py-12 pt-40">
      <h1 className="text-3xl md:text-5xl ml-10">Experience</h1>


      <div className="mt-20">
        <div className="flex flex-wrap justify-center">
          {experiences.map((experience, index) => (
            <JobCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;