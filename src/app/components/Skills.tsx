const skills = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'AWS', icon: '☁️' },
    { name: 'GraphQL', icon: '🕸️' },
    { name: 'Docker', icon: '🐳' },
  ];
  
  const Skills: React.FC = () => {
    return (
      <section className="py-12">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl">{skill.icon}</span>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;