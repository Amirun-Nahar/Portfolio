import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const EducationCard = ({ education }) => {
  return (
    <motion.div
      className="bg-[#1a1f2e]/80 backdrop-blur-sm p-8 rounded-3xl hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="flex justify-center items-center text-6xl text-[#8E7DBE] mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <FaGraduationCap />
      </motion.div>
      <h3 className="text-2xl font-semibold text-white mb-2 text-center">{education.degree}</h3>
      <h4 className="text-xl text-[#8E7DBE] mb-4 text-center">{education.institution}</h4>
      <p className="text-gray-300 mb-2 text-center">{education.duration}</p>
      <p className="text-gray-400 text-center">{education.description}</p>
      {education.achievements && (
        <ul className="mt-6 space-y-3 flex flex-col items-center">
          {education.achievements.map((achievement, i) => (
            <motion.li 
              key={i} 
              className="text-gray-400 flex items-center justify-center text-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <span className="text-[#8E7DBE] mr-2">•</span>
              {achievement}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Independent University, Bangladesh (IUB)",
      duration: "2022 - Present",
      description: "Focused on software development, algorithms, and web technologies.",
      achievements: [
        "Participated in various coding competitions and workshops",
        "Maintained a strong academic record with focus on practical applications"
      ]
    }
  ];

  return (
    <section id="education" className="relative py-20 bg-gray-900">
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
            Academic Journey
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Education
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            My academic background and achievements that have shaped my journey in technology.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {educationList.map((education) => (
            <EducationCard 
              key={education.degree} 
              education={education}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 