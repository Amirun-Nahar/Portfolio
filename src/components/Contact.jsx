import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const ContactCard = ({ icon: Icon, title, content, delay, href }) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="bg-[#1a1f2e]/80 backdrop-blur-sm p-10 rounded-3xl hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-center group hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="w-16 h-16 bg-[#8E7DBE]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8E7DBE]/20 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon className="text-[#8E7DBE] text-2xl" />
      </motion.div>
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 group-hover:text-[#8E7DBE] transition-colors duration-300">{content}</p>
    </motion.a>
  );
};

const InputField = ({ label, type, name, placeholder, value, onChange, error, delay }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <label className="block text-gray-300 mb-2 font-medium" htmlFor={name}>
        {label} {error && <span className="text-red-400 text-sm">- {error}</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows="4"
          className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border ${
            error ? 'border-red-400' : isFocused ? 'border-primary' : 'border-gray-700/50'
          } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border ${
            error ? 'border-red-400' : isFocused ? 'border-primary' : 'border-gray-700/50'
          } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors`}
          placeholder={placeholder}
        />
      )}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus('sending');
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-900">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#1a1f2e] via-[#1a1f2e] to-gray-900"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
      ></div>
      
      <div className="container relative mx-auto px-4 z-[50]">
        <motion.div
          className="text-center mb-20"
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
            Get in Touch
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Have a question or want to work together? Feel free to reach out to me using the form below or through any of the contact methods.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto px-4">
          <ContactCard
            icon={FaEnvelope}
            title="Email"
            content="naharamina68@gmail.com"
            href="mailto:naharamina68@gmail.com"
            delay={0.6}
          />
          <ContactCard
            icon={FaPhone}
            title="Phone"
            content="+8801603490972"
            href="tel:+880160349097"
            delay={0.8}
          />
          <ContactCard
            icon={FaMapMarkerAlt}
            title="Location"
            content="Dhaka, Bangladesh"
            href="https://maps.google.com"
            delay={1.0}
          />
        </div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-[#1a1f2e]/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                placeholder="Your Name"
                delay={1.4}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="your.email@example.com"
                delay={1.6}
              />
            </div>
            <InputField
              label="Subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              placeholder="What's this about?"
              delay={1.8}
            />
            <InputField
              label="Message"
              type="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Your Message"
              delay={2.0}
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 bg-[#8E7DBE] text-white rounded-xl font-medium 
                ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-opacity-90'} 
                transition-all duration-300 flex items-center justify-center gap-2`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                  <span>Sending...</span>
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <FaCheckCircle />
                  <span>Message Sent!</span>
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>

            {submitStatus === 'error' && (
              <p className="mt-4 text-red-400 text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 