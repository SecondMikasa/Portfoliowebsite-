import React from 'react';
import profileImage from "../assets/contentsep.webp";
import { FaInstagram, FaReddit, FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa'; 

function Maincontent() {
    // State to manage dropdown selection for each exam


  return (
    <>
     {/* Full Page Black Background */}
     <div className="bg-black text-white font-sans">
        {/* Section 1: Introduction */}
        <section className="flex h-screen items-center justify-center px-6 py-16 bg-black animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-12 w-full">
            {/* Left Content */}
            <div className="flex flex-col justify-center items-start space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">
                Hey Developers!
              </h1>
              <p className="text-md sm:text-lg leading-relaxed border-l-4 border-yellow-500 pl-4">
                Passionate about cloud computing, scalable architectures, and
                leveraging AWS services to solve real-world problems.
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                View Resume
              </button>
            </div>

            {/* Right Content */}
            <div className="flex justify-center items-center">
              <img
                src={profileImage}
                alt="Profile"
                className="w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 rounded-full shadow-2xl object-cover border-4 border-yellow-500 transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Tools & Technologies */}
        <section className="py-20 px-6 bg-gray-900 animate-fadeInUp">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Tools & Technologies Card */}
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                Tools & Technologies
              </h2>
              <ul className="space-y-3 text-lg list-disc list-inside text-gray-200">
                <li>Amazon Web Services</li>
                <li>Docker</li>
                <li>Terraform</li>
                <li>Git and GitHub</li>
                <li>Python and its Libraries</li>
              </ul>
            </div>

            {/* Python Libraries Card */}
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                Python Libraries
              </h2>
              <ul className="space-y-3 text-lg list-disc list-inside text-gray-200">
                <li>Boto3</li>
                <li>NumPy</li>
              </ul>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Other Tools/Tech:
              </h3>
              <ul className="flex flex-wrap gap-4 mt-4 text-lg text-gray-300">
                <li>Canva</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: About Me */}
        <section className="py-20 px-6 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-yellow-400">
              About Me
            </h1>
            <div className="border-l-4 border-yellow-500 pl-6 space-y-6 text-left text-gray-200">
              <p className="text-md sm:text-lg leading-relaxed">
                Hey Devs! My name is{" "}
                <span className="font-semibold text-yellow-400">
                  Kinshuk Jain
                </span>
                . I am an aspiring cloud practitioner, passionate about{" "}
                <span className="text-yellow-400">Cloud Computing / DevOps</span>
                . Currently preparing for the{" "}
                <span className="font-semibold text-white">
                  AWS Cloud Practitioner exam
                </span>{" "}
                and enhancing my deployment and cloud skills.
              </p>
              <p className="text-md sm:text-lg">
                <span className="font-semibold text-yellow-400">BTech /</span>{" "}
                Electrical Engineering{" "}
                <span className="text-gray-400 ml-2">2022 - 2026</span>
              </p>
              <p className="text-md sm:text-lg">
                <span className="font-semibold text-yellow-400">College:</span>{" "}
                JSS Academy of Technical Education
              </p>
            </div>
          </div>
        </section>

                {/* AWS Certification Roadmap */}
                <section className="py-20 px-6 bg-black text-white animate-fadeInUp">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-yellow-400">
              AWS Certification Roadmap
            </h2>
            <div className="space-y-6">
              {[  
                {
                  title: "AWS Cloud Practitioner",
                  description: "Basic foundational certification. Preparing now.",
                  key: "cloudPractitioner",
                },
                {
                  title: "AWS Solutions Architect - Associate",
                  description:
                    "Intermediate certification. Next step after Practitioner.",
                  key: "solutionsArchitect",
                },
                {
                  title: "AWS Solutions Architect - Professional",
                  description: "Advanced certification. Final goal in the roadmap.",
                  key: "professionalArchitect",
                },
              ].map((exam) => (
                <div
                  key={exam.key}
                  className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-800 rounded-lg "
                >
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-semibold">{exam.title}</h3>
                    <p className="text-gray-400 mt-1">{exam.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Social Media Connections */}
        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8">
              Connect with Me
            </h2>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.instagram.com/kinshukjain._"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:text-yellow-500 transform hover:scale-125 transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.reddit.com/The_Lnoon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:text-yellow-500 transform hover:scale-125 transition-all duration-300"
              >
                <FaReddit />
              </a>
              <a
                href="https://github.com/kinshukjainn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:text-yellow-500 transform hover:scale-125 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kinshuk-j-1966981b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl hover:text-yellow-500 transform hover:scale-125 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:kinshuk25jan04@gmail.com"
                className="text-4xl hover:text-yellow-500 transform hover:scale-125 transition-all duration-300"
              >
                <FaGoogle />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Maincontent