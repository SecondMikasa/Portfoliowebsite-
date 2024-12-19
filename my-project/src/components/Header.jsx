import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full bg-[#0e1012] text-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between flex-wrap">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <h1 className="text-xl md:text-3xl font-bold tracking-wide">
            KINSHUK.CLOUD.DEV
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className="w-full md:w-auto mt-4 md:mt-0">
          <ul className="flex flex-col md:flex-row items-center md:space-x-6">
            <li className="w-full md:w-auto">
              <Link to="/" className="block py-2 px-4 text-center hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link to="/docs" className="block py-2 px-4 text-center hover:text-yellow-400">
                Fundamental of Cloud
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link to="/awsscripts" className="block py-2 px-4 text-center hover:text-yellow-400">
                AWS Automation Scripts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
