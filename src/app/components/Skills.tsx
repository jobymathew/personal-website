import Image from 'next/image';
import SoftwareEngineerImage from '../pictures/SoftEngg2.png';
import { faAws, faCss3, faDocker, faFlutter, faHtml5, faJava, faJira, faJs, faNodeJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons/faNode';



const skills = [
  { name: 'JavaScript', icon: faJs },
  { name: 'React.js', icon: faReact },
  { name: 'Flutter', icon: faFlutter },
  { name: 'Java', icon: faJava },
  { name: 'AWS', icon: faAws },
  { name: 'Docker', icon: faDocker },
  { name: 'SQL Database', icon: faDatabase },
  { name: 'Node JS', icon: faNode },
  { name: 'JIRA', icon: faJira },
  { name: 'Wordpress', icon: faWordpress },
  { name: 'HTML', icon: faHtml5 },
  { name: 'CSS', icon: faCss3 },
];

const Skills: React.FC = () => {
  return (
    <div className="py-12 flex pt-52">

      <div className='pl-10'>
        <Image
          src={SoftwareEngineerImage}
          alt="Software Engineer"
          width={500}
          height={500}
        />
      </div>

      <div className='ml-20'>
        <h2 className="text-2xl md:text-4xl font-extralight">My Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">

              {/* <span className="text-2xl">{skill.icon}</span> */}
              <FontAwesomeIcon icon={skill.icon} size="2x" />
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;