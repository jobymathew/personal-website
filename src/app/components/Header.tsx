const Header: React.FC = () => {
    return (
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold">Joby Mathew</h1>
        <p className="text-lg md:text-2xl mt-4">Full-Stack Developer</p>
        <a
          href="/Joby_Mathew_Resume.pdf"
          className="bg-yellow-400 py-2 px-4 mt-6 inline-block rounded"
        >
          Check out my CV!
        </a>
      </header>
    );
  };
  
  export default Header;