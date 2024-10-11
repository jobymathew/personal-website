import Image, { StaticImageData } from "next/image";
import Curtin from '../pictures/Curtin.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

interface JobCardProps {
  logo: StaticImageData;
  companyName: string;
  position: string;
  dates: string;
  description: string;
  responsibilities: string[];
  remote: string;
}

const JobCard: React.FC<JobCardProps> = ({ logo, companyName, position, dates, description, responsibilities, remote }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-white overflow-hidden mx-4 my-6">
      <div className="bg-[#E97451] p-4">
        <h3 className="text-white text-lg font-semibold">{companyName}</h3>
        <div className="flex justify-center">
          <Image src={logo} alt={companyName} className="rounded-full h-24 w-24" />
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold">{position}</h4>
        <p className="text-gray-500">{dates}</p>
        <p className="mt-2">{description}</p>
        <ul className="mt-2">
          {responsibilities.map((item: string, index: number) => (
            <li key={index} className="flex items-center">
              <FontAwesomeIcon icon={faLaptop} className="text-[#E97451] mr-2" /> {/* Change icon as needed */}
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
    companyName: 'Concierge Friend',
    position: 'Full Stack Developer - Team Lead',
    dates: 'Jul 2021 – Present',
    description: 'Lead, development & setup of a digital product. Used Symfony, Laravel, Ionic, PHP & Vue',
    responsibilities: [
      'Admin dashboard',
      'WebApp, Android & iOS apps',
      'Project Management',
    ],
    remote: 'Fully Remote 🌍',
  },
  {
    logo: Curtin,
    companyName: 'Concierge Friend',
    position: 'Full Stack Developer - Team Lead',
    dates: 'Jul 2021 – Present',
    description: 'Lead, development & setup of a digital product. Used Symfony, Laravel, Ionic, PHP & Vue',
    responsibilities: [
      'Admin dashboard',
      'WebApp, Android & iOS apps',
      'Project Management',
    ],
    remote: 'Fully Remote 🌍',
  },
  {
    logo: Curtin,
    companyName: 'Concierge Friend',
    position: 'Full Stack Developer - Team Lead',
    dates: 'Jul 2021 – Present',
    description: 'Lead, development & setup of a digital product. Used Symfony, Laravel, Ionic, PHP & Vue',
    responsibilities: [
      'Admin dashboard',
      'WebApp, Android & iOS apps',
      'Project Management',
    ],
    remote: 'Fully Remote 🌍',
  },
  {
    logo: Curtin,
    companyName: 'Concierge Friend',
    position: 'Full Stack Developer - Team Lead',
    dates: 'Jul 2021 – Present',
    description: 'Lead, development & setup of a digital product. Used Symfony, Laravel, Ionic, PHP & Vue',
    responsibilities: [
      'Admin dashboard',
      'WebApp, Android & iOS apps',
      'Project Management',
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