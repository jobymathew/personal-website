const experiences = [
    {
      company: 'Stanley College',
      role: 'Professional Year',
      duration: 'January 2024 - Present',
      description: 'Skilled at working independently and collaboratively in a team environment.',
    },
    {
      company: 'Institute of Data',
      role: 'Software Engineering Trainer',
      duration: 'September 2023 - Present',
      description: 'Providing practical guidance in web development with React.',
    },
  ];
  
  const Experience: React.FC = () => {
    return (
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 text-center">Experience</h2>
        <div className="mt-6 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-md">
              <h3 className="text-lg md:text-xl font-semibold">{exp.role} at {exp.company}</h3>
              <p className="text-gray-600">{exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experience;