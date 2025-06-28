import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHome, FaUser, 
  FaCode, FaBriefcase, FaProjectDiagram, FaPhoneAlt, FaMapMarkerAlt, FaGraduationCap 
} from 'react-icons/fa';

const SocialLink = ({ href, icon: Icon, label, onClick }) => {
  return (
    <motion.a
      href={href}
      target={onClick ? undefined : "_blank"}
      rel={onClick ? undefined : "noopener noreferrer"}
      onClick={onClick}
      className="flex items-center gap-3 text-gray-400 hover:text-primary p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group"
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 text-primary"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon size={18} />
      </motion.div>
      <span className="group-hover:translate-x-1 transition-transform duration-300">
        {label}
      </span>
    </motion.a>
  );
};

const FooterSection = ({ title, children }) => {
  return (
    <motion.div
      className="w-full md:w-1/3 px-6 mb-12 md:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-gray-800">
        {title}
      </h3>
      {children}
    </motion.div>
  );
};

const ContactInfo = ({ icon: Icon, label, value, href }) => {
  return (
    <motion.a
      href={href}
      className="flex items-center gap-3 text-gray-400 hover:text-primary p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 text-primary"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon size={18} />
      </motion.div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{label}</span>
        <span className="text-gray-300">{value}</span>
      </div>
    </motion.a>
  );
};

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com/Amirun-Nahar', icon: FaGithub, label: 'Follow on GitHub' },
    { href: 'https://www.linkedin.com/in/amirun-nahar-899473344', icon: FaLinkedin, label: 'Connect on LinkedIn' }
  ];

  const quickLinks = [
    { 
      href: '#home', 
      icon: FaHome, 
      label: 'Home',
      onClick: (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    { 
      href: '#about', 
      icon: FaUser, 
      label: 'About Me',
      onClick: (e) => {
        e.preventDefault();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      href: '#skills', 
      icon: FaCode, 
      label: 'My Skills',
      onClick: (e) => {
        e.preventDefault();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      href: '#education', 
      icon: FaGraduationCap, 
      label: 'Education',
      onClick: (e) => {
        e.preventDefault();
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      href: '#projects', 
      icon: FaProjectDiagram, 
      label: 'Projects',
      onClick: (e) => {
        e.preventDefault();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    { 
      href: '#contact', 
      icon: FaPhoneAlt, 
      label: 'Contact',
      onClick: (e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 pt-24 pb-12">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"
        style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }}
      ></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="flex flex-wrap">
          <FooterSection title="About Me">
            <div className="space-y-6">
              <motion.h2
                className="text-2xl font-bold text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Amirun Nahar
              </motion.h2>
              <p className="text-gray-400 leading-relaxed">
                A passionate full-stack developer dedicated to creating interactive and user-friendly web applications. Let's work together to bring your ideas to life!
              </p>
              <div className="space-y-3">
                <ContactInfo 
                  icon={FaEnvelope}
                  label="Email"
                  value="amirunnahar2001@gmail.com"
                  href="mailto:amirunnahar2001@gmail.com"
                />
                <ContactInfo 
                  icon={FaMapMarkerAlt}
                  label="Location"
                  value="Dhaka, Bangladesh"
                  href="#"
                />
              </div>
            </div>
          </FooterSection>

          <FooterSection title="Quick Links">
            <nav className="grid gap-2">
              {quickLinks.map((link, index) => (
                <SocialLink 
                  key={index} 
                  href={link.href}
                  icon={link.icon}
                  label={link.label}
                  onClick={link.onClick}
                />
              ))}
            </nav>
          </FooterSection>

          <FooterSection title="Connect With Me">
            <div className="space-y-6">
              <p className="text-gray-400">
                Follow me on social media to stay updated with my latest projects and tech articles.
              </p>
              <div className="grid gap-2">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>
          </FooterSection>
        </div>

        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">
            Thank you for visiting my portfolio
          </p>
          <p className="text-gray-500 text-sm">
            © {currentYear} Amirun Nahar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 