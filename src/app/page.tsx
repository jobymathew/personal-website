import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Education from './components/Education';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Skills />
      <Education />
      <Experience />
    </main>
  );
}