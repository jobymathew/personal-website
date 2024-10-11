import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <label className="inline-flex items-center cursor-pointer pr-10">
      <input
        type="checkbox"
        className="sr-only"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <div className="relative w-14 h-8 bg-gray-200 rounded-full dark:bg-gray-600">
        <div
          className={`w-8 h-8 bg-white rounded-full shadow transform transition-all flex items-center justify-center ${
            darkMode ? 'translate-x-6' : ''
          }`}
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faMoon} className="text-gray-800" />
          ) : (
            <FontAwesomeIcon icon={faSun} className="text-yellow-500" />
          )}
        </div>
      </div>
    </label>
  );
};

export default DarkModeToggle;