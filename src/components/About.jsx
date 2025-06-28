import { motion } from 'framer-motion';
import Aurora from './Aurora';

const TextBlock = ({ children, delay = 0 }) => {
  return (
    <motion.p
      className="text-lg text-gray-300 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </motion.p>
  );
};

const FeatureCard = ({ title, description, delay, icon }) => {
  return (
    <motion.div
      className="text-center p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="text-6xl text-primary mb-6 mx-auto"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <motion.h4 
        className="text-2xl font-semibold text-white mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {title}
      </motion.h4>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
  };

  return (
    <section id="about" className="relative min-h-screen py-20 bg-gray-900">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      ></div>
      <Aurora />
      
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
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Get to Know
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            About Me
          </motion.h2>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
              <div className="space-y-6">
                <TextBlock delay={0.8}>
                  I am a passionate Full Stack Developer with a keen eye for creating elegant solutions 
                  to complex problems. My journey in programming began with a curiosity about how 
                  websites work, which led me to dive deep into web development technologies.
                </TextBlock>

                <TextBlock delay={1.0}>
                  Throughout my programming journey, I've developed a strong foundation in both frontend 
                  and backend technologies. I enjoy working with modern JavaScript frameworks, particularly 
                  React, and have experience with Node.js and various database systems.
                </TextBlock>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">My Passion</h3>
              <div className="space-y-6">
                <TextBlock delay={1.0}>
                  What I love most about development is the opportunity to build solutions that make a 
                  real difference in people's lives. I'm particularly interested in creating intuitive 
                  user interfaces and optimizing application performance.
                </TextBlock>

                <TextBlock delay={1.2}>
                  Outside of programming, I enjoy reading books and watching movies. These hobbies help me maintain 
                  a creative perspective and problem-solving mindset that I bring back to my development work. 
                  I also enjoy reading technical blogs and participating in coding communities to stay 
                  updated with the latest technology trends.
                </TextBlock>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Problem Solver"
              description="Turning complex challenges into elegant solutions with a methodical approach"
              delay={1.4}
              icon="🎯"
            />
            <FeatureCard
              title="Creative Mind"
              description="Bringing innovative ideas and unique perspectives to every project"
              delay={1.6}
              icon="💡"
            />
            <FeatureCard
              title="Continuous Learner"
              description="Always exploring new technologies and staying ahead of industry trends"
              delay={1.8}
              icon="📚"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;