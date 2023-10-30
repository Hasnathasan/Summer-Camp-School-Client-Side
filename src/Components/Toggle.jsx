import { useState } from 'react';
import Switch from 'react-switch';
import '../styles/toggle.css';

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex items-center">
    <span className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
      {isDarkMode ? 'Dark' : 'Light'}
    </span>
    <Switch
      checked={isDarkMode}
      onChange={handleToggle}
      onColor="#4299e1"
      offColor="#718096"
      onHandleColor="#fff"
      offHandleColor="#fff"
      uncheckedIcon={
        <span className="flex justify-center items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10 3a7 7 0 100 14 7 7 0 000-14zM3 10a7 7 0 1114 0 7 7 0 01-14 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      }
      checkedIcon={
        <span className="flex justify-center items-center h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M10 3a7 7 0 017 7c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7zm0 2a5 5 0 00-5 5c0 2.761 2.239 5 5 5s5-2.239 5-5-2.239-5-5-5z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      }
      handleDiameter={20}
      height={24}
      width={48}
      className="react-switch"
    />
  </div>
  );
};

export default Toggle;