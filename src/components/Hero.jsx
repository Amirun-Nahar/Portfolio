import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, className = "", delay = 0 }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.03, 
        delayChildren: delay 
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
          className="text-white"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const SocialLink = ({ href, icon, label, delay }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-primary transition-colors p-3 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.1 }}
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
};

const Hero = () => {
  const socialLinks = [
    {
      id: 'github',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/Amirun-Nahar',
      label: 'GitHub'
    },
    {
      id: 'linkedin',
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/amirun-nahar-899473344',
      label: 'LinkedIn'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gray-900 flex items-center">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      ></div>
      
      <div className="container relative mx-auto px-4 z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 mb-8">
              <div className="mb-6">
                <AnimatedText
                  text="Hi,"
                  className="text-4xl md:text-6xl font-bold mb-2"
                  delay={0.2}
                />
                <AnimatedText
                  text="I'm Amirun Nahar"
                  className="text-4xl md:text-6xl font-bold text-primary"
                  delay={0.4}
                />
              </div>
              <AnimatedText
                text="Full Stack Developer"
                className="text-2xl md:text-3xl text-gray-300 mb-6"
                delay={0.6}
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-lg text-gray-300 mb-8"
              >
                Passionate about creating beautiful and functional web applications
              </motion.p>
              
              {/* Resume Button */}
              <motion.a
                href="assets/Amirun_Nahar_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                Download Resume
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={link.id}
                  href={link.url}
                  icon={link.icon}
                  label={link.label}
                  delay={1.2 + index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50 p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="assets/Profile_image.jpeg"
                alt="Amirun Nahar"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 