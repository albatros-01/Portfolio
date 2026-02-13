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
import vercelImg from "./assets/vercel.png";
import awsImg from "./assets/aws.png";
import thunderClientImg from "./assets/thunderclient.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-950 text-blue-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm shadow-lg z-10 rounded-b-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold text-cyan-400 tracking-[2px]">
            SARATH KUMAR
          </h1>
          <ul className="hidden md:flex space-x-10">
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:shadow-md px-2 py-1 rounded-md hover:bg-white/10 hover:text-blue-500 backdrop-blur-sm hover:font-bold transition duration-100"
              >
                👤About
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-gray-700 hover:shadow-md px-2 py-1 rounded-md hover:bg-white/10 hover:text-blue-500 backdrop-blur-sm hover:font-bold transition duration-100"
              >
                🎓Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-700 hover:shadow-md px-2 py-1 rounded-md hover:bg-white/10 hover:text-blue-500 backdrop-blur-sm hover:font-bold transition duration-100"
              >
                📈Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-700 hover:shadow-md px-2 py-1 rounded-md hover:bg-white/10 hover:text-blue-500 backdrop-blur-sm hover:font-bold transition duration-100"
              >
                👨🏻‍💻Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:shadow-md px-2 py-1 rounded-md hover:bg-white/10 hover:text-blue-500 backdrop-blur-sm hover:font-bold transition duration-100"
              >
                📍Contact
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
                className="rounded-4xl mx-auto w-64 h-64 object-cover shadow-lg  shadow-blue-500"
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
                  className="inline-block bg-gray-700 hover:text-blue-500 hover:scale-102 text-white font-bold py-2 px-6 rounded-lg transition duration-300 shadow-md  hover:shadow-lg hover:shadow-white/15 outline-0"
                >
                  📑Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6  min-h-screen">
        <div className="container mx-auto max-w-4xl flex flex-col justify-center min-h-screen">
          <h2 className="text-4xl font-bold text-blue-500 text-center mb-12">
            Education
          </h2>
          <div className="grid grid-cols-2 gap-10">
            <div className="bg-linear-to-br from-gray-200 to-blue-300 p-10 rounded-lg text-center shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                Diploma in Mechanical Engineering
              </h3>
              <p className="text-gray-600 mb-2">2017-2020</p>
              <p>Kongu Velalar Polytechnic College-Erode</p>
            </div>
            <div className="bg-linear-to-br from-gray-200 to-blue-300 text-center p-10  rounded-lg shadow-md">
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
      <section id="skills" className="py-12 px-6 min-h-screen">
        <div className="container mx-auto max-w-6xl flex flex-col justify-center min-h-screen">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-500">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="backdrop-blur-md border-0 shadow-md rounded-2xl bg-linear-to-br from-gray-200 to-blue-300 p-6 hover:scale-102 transition-transform duration-300">
              <h2 className="text-xl font-bold font-serif text-center mb-8 text-gray-900 tracking-[2px]">
                FRONTEND
              </h2>
              <div className="space-y-6">
                {/* HTML */}
                <div className="flex items-center gap-4">
                  <img
                    src={htmlImg}
                    alt="HTML"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        HTML
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        90%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* CSS */}
                <div className="flex items-center gap-4">
                  <img
                    src={cssImg}
                    alt="CSS"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        CSS
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        88%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* JavaScript */}
                <div className="flex items-center gap-4">
                  <img
                    src={javascriptImg}
                    alt="JavaScript"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        JavaScript
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        85%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* React */}
                <div className="flex items-center gap-4">
                  <img
                    src={reactImg}
                    alt="React"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        React
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        82%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-cyan-500 h-2 rounded-full"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Bootstrap */}
                <div className="flex items-center gap-4">
                  <img
                    src={bootstrapImg}
                    alt="Bootstrap"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        Bootstrap
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        86%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "86%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Tailwind CSS */}
                <div className="flex items-center gap-4">
                  <img
                    src={tailwindImg}
                    alt="Tailwind CSS"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        Tailwind CSS
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        88%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-cyan-400 h-2 rounded-full"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-linear-to-br from-gray-200 to-blue-300 rounded-2xl shadow-md p-6 hover:scale-102 transition-transform duration-300">
              <h2 className="text-xl font-bold font-serif text-center mb-8 tracking-[2px] text-gray-900">
                BACKEND
              </h2>
              <div className="space-y-6">
                {/* Node.js */}
                <div className="flex items-center gap-4">
                  <img
                    src={nodeImg}
                    alt="Node.js"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        Node.js
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        80%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Express.js */}
                <div className="flex items-center gap-4">
                  <img
                    src={expressImg}
                    alt="Express.js"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        Express.js
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        80%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-gray-700 h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* MySQL */}
                <div className="flex items-center gap-4">
                  <img
                    src={mysqlImg}
                    alt="MySQL"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        MySQL
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        78%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* MongoDB */}
                <div className="flex items-center gap-4">
                  <img
                    src={mongoImg}
                    alt="MongoDB"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        MongoDB
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        82%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-green-700 h-2 rounded-full"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Skills */}
            <div className="bg-linear-to-br from-gray-200 to-blue-300 rounded-2xl shadow-md p-6 hover:scale-102 transition-transform duration-300">
              <h2 className="text-xl font-bold font-serif text-center mb-8 tracking-[2px] text-gray-900">
                Tools
              </h2>
              <div className="space-y-6">
                {/* Git */}
                <div className="flex items-center gap-4">
                  <img
                    src={gitImg}
                    alt="Git"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        Git
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        90%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-red-600 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-4">
                  <img
                    src={githubImg}
                    alt="GitHub"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        GitHub
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        90%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-gray-900 h-2 rounded-full"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Vercel */}
                <div className="flex items-center gap-4">
                  <img
                    src={vercelImg}
                    alt="Vercel"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        Vercel
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        85%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-gray-800 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* AWS */}
                <div className="flex items-center gap-4">
                  <img
                    src={awsImg}
                    alt="AWS"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        AWS
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        75%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Thunder Client */}
                <div className="flex items-center gap-4">
                  <img
                    src={thunderClientImg}
                    alt="Thunder Client"
                    className="h-12 w-12 hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-800">
                        Thunder Client
                      </span>
                      <span className="text-sm font-semibold text-gray-800">
                        88%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="flex justify-center space-x-8 text-white">
              <p >
                <strong>
                    <a
                      href="mailto:sarathchandran9344@gmail.com"
                      className="flex items-center gap-2 bg-linear-to-rfrom-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition duration-200 hover:scale-105"
                    >
                      <span className="text-lg">📧</span>
                      <span className="font-semibold">Send Email</span>
                    </a>
                </strong>
              </p>
              <p>
                <strong>
                    <a
                      href="https://www.linkedin.com/in/sarath-chandran-0a7a13366"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg ring-0 hover:ring-4 hover:ring-blue-400/30 transform transition duration-200 hover:scale-105"
                    >
                      <span className="text-lg">🔗</span>
                      <span className="font-semibold">LinkedIn</span>
                    </a>
                </strong>
              </p>
              <p>
                <strong>
                    <a
                      href="https://github.com/albatros-01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transform transition duration-200 hover:scale-105"
                    >
                      <img src={githubImg} alt="GitHub" className="h-5 w-5" />
                      <span className="font-semibold">GitHub</span>
                    </a>
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
