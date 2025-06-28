import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

const SkillCard = ({ category, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        delay: index * 0.2 + 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-700/50"
    >
      <div className="text-center mb-8">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="inline-block"
        >
          {category.icon}
        </motion.div>
        <h3 className="text-2xl font-semibold text-white mt-4">
          {category.title}
        </h3>
      </div>

      <div className="space-y-6">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name} className="relative">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 font-medium">{skill.name}</span>
              <span className="text-primary font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2.5">
              <motion.div
                className="bg-primary rounded-full h-2.5"
                variants={progressVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={skill.level}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FaReact className="text-6xl text-primary" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Responsive Design', level: 90 },
      ],
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <FaNodeJs className="text-6xl text-primary" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Authentication', level: 75 },
      ],
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <FaDatabase className="text-6xl text-primary" />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Others',
      icon: <FaTools className="text-6xl text-primary" />,
      skills: [
        { name: 'Git & GitHub', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-gray-900">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"
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
            className="text-primary text-lg font-medium mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            What I Can Do
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            My Skills
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 