import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

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
        <nav
          aria-label="Main Navigation"
          className="w-full md:w-auto mt-4 md:mt-0"
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6">
            <li className="w-full md:w-auto">
              <Link
                to="/"
                className={`block py-2 px-4 text-center ${
                  location.pathname === "/" ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/docs"
                className={`block py-2 px-4 text-center ${
                  location.pathname === "/docs" ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
                aria-label="Fundamentals of Cloud"
              >
                Fundamental of Cloud
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/awsscripts"
                className={`block py-2 px-4 text-center ${
                  location.pathname === "/awsscripts" ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
                aria-label="AWS Automation Scripts"
              >
                AWS Automation Scripts
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                to="/awslearning"
                className={`block py-2 px-4 text-center ${
                  location.pathname === "/awsslearning" ? "text-yellow-400" : "hover:text-yellow-400"
                }`}
                aria-label="AWS Automation Scripts"
              >
                AWS Learning Resources
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
