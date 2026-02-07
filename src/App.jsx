import React, { useState } from "react";
import sarathImage from "./assets/sarath.jpeg";
import Resume from "./assets/Sarath Kumar Resume.pdf";
import htmlImg from "./assets/html.png";
import cssImg from "./assets/css.png";
import bootstrapImg from "./assets/bootstrap.png";
import tailwindImg from "./assets/tailwind.png";
import javascriptImg from "./assets/javascript.png";
import reactImg from "./assets/react.png";
import nodeImg from "./assets/node.png";
import expressImg from "./assets/express.png";
import mongoImg from "./assets/mongo.png";
import mysqlImg from "./assets/mysql.png";
import gitImg from "./assets/git.png";
import githubImg from "./assets/github.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-lg z-10 rounded-b-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            MERN-Stack Developer
          </h1>
          <ul className="hidden md:flex space-x-10">
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:border-b-2 hover:font-bold transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-gray-700 hover:border-b-2 hover:font-bold transition duration-300"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-700 hover:border-b-2 hover:font-bold transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-700 hover:border-b-2 hover:font-bold transition duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:border-b-2 hover:font-bold transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute top-full left-0 w-full">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <a
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* About Section */}
      <section id="about" className="pt-8 pb-16 px-6 min-h-screen">
        <div className="container mx-auto max-w-4xl flex flex-col justify-center min-h-screen">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-xl text-gray-600">
              Passionate MERN Stack Developer
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={sarathImage}
                alt="Profile"
                className="rounded-4xl mx-auto w-64 h-64 object-cover shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg leading-relaxed">
                Hello! I'm Sarath, Full-stack developer specializing in the MERN
                stack (MongoDB, Express.js, React, Node.js). I love creating
                efficient, scalable, and user-friendly web applications. With a
                strong foundation in both front-end and back-end technologies, I
                bring ideas to life through code.
              </p>
              
              {/* Resume Section */}
              <div className="mt-8 flex justify-center items-center">
                <a
                  href={Resume}
                  download="Sarath Kumar Resume.pdf"
                  className="inline-block bg-white hover:text-black text-blue-400 font-bold py-2 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  ⬇️ Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white min-h-screen">
        <div className="container mx-auto max-w-4xl flex flex-col justify-center min-h-screen">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-linear-to-br from-blue-100 to-slate-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                Diploma in Mechanical Engineering
              </h3>
              <p className="text-gray-600 mb-2">2017-2020</p>
              <p>Kongu Velalar Polytechnic College-Erode</p>
            </div>
            <div className="bg-linear-to-br from-blue-100 to-slate-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                MERN-Stack Web Development Bootcamp
              </h3>
              <p className="text-gray-600 mb-2">Fortune Innovatives-2025</p>
              <p>
                Intensive program covering MERN stack, modern JavaScript, and
                best practices in web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12  px-6 min-h-screen">
        <div className="container mx-auto max-w-6xl flex flex-col justify-center  min-h-screen">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                E-commerce Platform
              </h3>
              <p className="text-gray-600 mb-4">
                A full-featured online store built with MERN stack, including
                user authentication, payment integration, and admin dashboard.
              </p>
              <div className="flex space-x-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Node.js
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                  MongoDB
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Task Management App
              </h3>
              <p className="text-gray-600 mb-4">
                A collaborative task management tool with real-time updates,
                drag-and-drop functionality, and team collaboration features.
              </p>
              <div className="flex space-x-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                  Express
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-6 bg-white min-h-screen">
        <div className="container mx-auto max-w-6xl flex flex-col justify-center min-h-screen">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <div className="front backdrop-blur-md border-0 shadow-md rounded-2xl bg-linear-to-br from-blue-100 to-slate-100  p-6 hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-bold font-serif text-center mb-4 text-cyan-400 tracing-[2px]">
                Frontend
              </h2>
              <ul className="flex flex-wrap justify-center gap-4">
                <li>
                  <img
                    src={htmlImg}
                    alt="HTML"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
                <li>
                  <img
                    src={cssImg}
                    alt="CSS"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
                <li>
                  <img
                    src={bootstrapImg}
                    alt="BOOTSTRAP"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
                <li>
                  <img
                    src={tailwindImg}
                    alt="TAILWIND CSS"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
                <li>
                  <img
                    src={javascriptImg}
                    alt="JAVASCRIPT"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
                <li>
                  <img
                    src={reactImg}
                    alt="REACT"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-blue-100 to-slate-100 rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-bold font-serif text-center mb-4 tracking-[2px] text-cyan-400">
                Backend
              </h2>
              <ul className="flex flex-wrap justify-center gap-4">
                <li>
                  <img
                    src={nodeImg}
                    alt="NODE.JS"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
                <li>
                  <img
                    src={expressImg}
                    alt="EXPRESS.JS"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
                <li>
                  <img
                    src={mongoImg}
                    alt="MongoDB"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
                <li>
                  <img
                    src={mysqlImg}
                    alt="mySQL"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-blue-100 to-slate-100 rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl font-bold font-serif text-center mb-4 tracking-[2px] text-cyan-400">
                Tools
              </h2>
              <ul className="flex flex-wrap justify-center gap-4">
                <li>
                  <img
                    src={gitImg}
                    alt="GIT"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
                <li>
                  <img
                    src={githubImg}
                    alt="GITHUB"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 min-h-screen">
        <div className="container mx-auto max-w-4xl flex flex-col justify-center min-h-screen">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="text-center">
            <p className="text-lg mb-8">
              I'm always open to discussing new opportunities and interesting
              projects. Let's connect!
            </p>
            <div className="flex justify-center space-x-8">
              <p>
                <strong>Email:</strong>sarathchandran9344@gmail.com
              </p>
              <p>
                <strong>
                  <a href="www.linkedin.com/in/sarath-chandran-0a7a13366">
                    LinkedIN
                  </a>
                </strong>
              </p>
              <p>
                <strong>
                  <a href="https://github.com/albatros-01">GitHUB</a>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Sarath. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
