import Image, { StaticImageData } from "next/image";
import Curtin from '../pictures/Curtin.jpeg';
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
        <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>

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
    logo: Curtin,
    companyName: 'Safer Community Security',
    bg: 'https://www.safercommunity.com.au/wp-content/uploads/2023/03/About.webp',
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
    logo: Curtin,
    companyName: 'Capsule Labs',
    bg: 'https://www.safercommunity.com.au/wp-content/uploads/2023/03/About.webp',
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
    logo: Curtin,
    companyName: 'Institue of Data',
    bg: 'https://www.safercommunity.com.au/wp-content/uploads/2023/03/About.webp',
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
    logo: Curtin,
    companyName: 'Wizroots Technologies',
    bg: 'https://www.safercommunity.com.au/wp-content/uploads/2023/03/About.webp',
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
      <h2 className="text-2xl md:text-4xl font-semibold text-center">Experience</h2>


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