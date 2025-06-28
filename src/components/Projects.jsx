import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <motion.div
      className="bg-[#1a1f2e]/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-6 line-clamp-2">{project.shortDescription}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.mainTech.slice(0, 3).map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-[#8E7DBE]/10 text-[#8E7DBE] rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {project.mainTech.length > 3 && (
            <span className="px-3 py-1 bg-[#8E7DBE]/10 text-[#8E7DBE] rounded-full text-sm">
              +{project.mainTech.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => onViewDetails(project)}
          className="w-full px-6 py-3 bg-[#8E7DBE] text-white rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-[8px] z-[99]" onClick={onClose} />
      <div className="fixed inset-0 z-[100] overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div className="relative bg-[#1a1f2e] rounded-3xl w-full max-w-4xl my-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-3 bg-[#1a1f2e] hover:bg-[#8E7DBE] rounded-full transition-all duration-300 hover:scale-110 z-[101] shadow-lg"
            >
              <FaTimes className="text-white text-2xl" />
            </button>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-6">{project.title}</h2>

              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Project Overview</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Main Technology Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.mainTech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-[#8E7DBE]/10 text-[#8E7DBE] rounded-xl text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Challenges Faced</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Future Improvements</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {project.improvements.map((improvement, index) => (
                      <li key={index}>{improvement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">All Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#8E7DBE]/10 text-[#8E7DBE] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#8E7DBE] text-white rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                    >
                      <FaGithub size={20} />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Runlytic",
      shortDescription: "A modern and responsive landing page built with React, focusing on clean design and seamless user experience.",
      description: "Marathon is a modern and responsive landing page built with React. It showcases a clean, single-page design focused on providing a seamless user experience across all devices, from mobile phones to desktops.",
      image: "assets/runlytic.png",
      mainTech: ["React", "MongoDB", "Node.js", "Express"],
      technologies: [
        "React",
        "HTML5 & JSX",
        "CSS3",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Framer Motion",
        "React Icons",
        "MongoDB",
        "Express.js",
        "Node.js"
      ],
      features: [
        "Modern and clean single-page design",
        "Fully responsive layout for all devices",
        "Interactive navigation menu",
        "Smooth scrolling and animations",
        "Contact form with MongoDB integration",
        "Performance optimized assets",
        "Cross-browser compatibility"
      ],
      challenges: [
        "Component Architecture: Structuring the website into reusable and manageable React components was a key focus",
        "Backend Integration: Setting up MongoDB and Express.js for efficient data management and API endpoints",
        "State Management: Managing the state for interactive elements, like the mobile navigation menu, required careful use of React hooks"
      ],
      improvements: [
        "Enhanced Backend Features: Expand the MongoDB integration with advanced querying and data analytics",
        "Performance Optimization: I plan to improve load times by compressing images and minifying the code bundle",
        "Add Micro-interactions: I will enhance the user experience by adding subtle animations and transitions to interactive elements"
      ],
      github: "https://github.com/Amirun-Nahar/Marathon-Frontend",
      live: "https://runlytic-marathon.netlify.app/"
    },
    {
      title: "HobbyHub",
      shortDescription: "A full-stack application built with React and Firebase, featuring real-time updates and user authentication.",
      description: "HobbyHub is a full-stack web application that functions as a community platform. It allows users to create accounts, log in, create new groups, and join existing groups. The project demonstrates the integration of a React frontend with Firebase and MongoDB backend.",
      image: "assets/hobbyhub.png",
      mainTech: ["React", "Firebase", "MongoDB", "Node.js"],
      technologies: [
        "React",
        "React Router",
        "Tailwind CSS",
        "Firebase Authentication",
        "Firebase Realtime Database",
        "MongoDB",
        "Express.js",
        "Node.js"
      ],
      features: [
        "User authentication and account management",
        "Real-time group creation and updates",
        "Protected routes for authenticated users",
        "Responsive and modern UI design",
        "Secure data management with Firebase and MongoDB",
        "Client-side routing with React Router",
        "Utility-first styling with Tailwind CSS"
      ],
      challenges: [
        "Firebase Integration: Setting up Firebase for user authentication and real-time updates",
        "Database Architecture: Designing an efficient schema that works with both Firebase and MongoDB",
        "Protected Routes: Implementing private routes to restrict access to certain pages only to authenticated users",
        "Real-time Data Syncing: Ensuring that new group creation and updates were reflected instantly across the application"
      ],
      improvements: [
        "Advanced Search and Filtering: Implement advanced search functionality for filtering groups by category, location, or group type",
        "User Profile Dashboard: Create a dedicated dashboard where users can view and manage their posted groups",
        "Data Analytics: Implement MongoDB aggregation for insights and recommendations",
        "UI/UX Refinement: Continue refining the interface with more interactive elements and polished design"
      ],
      github: "https://github.com/Amirun-Nahar/HobbyHub",
      live: "https://hobbyhub-new.netlify.app/"
    },
    {
      title: "DevBoard",
      shortDescription: "An interactive personal dashboard application built with vanilla JavaScript, featuring real-time search and dynamic content loading.",
      description: "DevBoard is a modern and interactive web application designed as a personal dashboard or a lightweight task management tool. It provides a visual workspace to organize tasks, track progress, or display key information, offering a streamlined user experience.",
      image: "assets/devboard.png",
      mainTech: ["HTML5", "Tailwind CSS", "DaisyUI"],
      technologies: [
        "HTML5",
        "Tailwind CSS",
        "DaisyUI",
        "JavaScript ES6+",
        "Local Storage",
        "DOM Manipulation",
        "CSS Grid & Flexbox"
      ],
      features: [
        "Task organization and tracking",
        "Dynamic dashboard layout",
        "Progress visualization",
        "Quick task search and filtering",
        "Responsive grid system",
        "Modern UI with DaisyUI components",
        "Persistent data storage"
      ],
      challenges: [
        "Dashboard Layout: Creating a flexible and responsive grid system for various dashboard widgets",
        "State Management: Implementing efficient state management using vanilla JavaScript and Local Storage",
        "Dynamic UI Updates: Ensuring smooth updates of task status and progress without page refresh"
      ],
      improvements: [
        "Refactor with React: Rebuild using React for better state management and component organization",
        "Add Customization: Implement drag-and-drop functionality for dashboard widget arrangement",
        "Data Visualization: Add charts and graphs for better progress tracking",
        "Cloud Sync: Add backend integration for data synchronization across devices"
      ],
      github: "https://github.com/Amirun-Nahar/Assignment-5-DevBoard-",
      live: "https://amirun-nahar.github.io/Assignment-5-DevBoard-"
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-gray-900">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e] via-[#1a1f2e] to-gray-900"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      ></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="text-[#8E7DBE] text-lg font-medium mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My Work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Here are some of my recent projects that showcase my skills and experience in web development.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 