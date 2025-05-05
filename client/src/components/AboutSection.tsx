import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode, FaDownload } from "react-icons/fa";

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h2 className="text-3xl font-bold mb-2 text-primary">About Me</h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a software developer with experience in full-stack development, cloud architecture, and cybersecurity. Currently enhancing my skills with advanced education in Cloud Architecture and Cybersecurity.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              With a Bachelor's degree in Information Technology and hands-on experience in software development, I bring a diverse skill set to create robust and secure applications.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm passionate about leveraging technology to solve real-world problems and constantly expanding my knowledge in emerging technologies.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
                <FaGraduationCap className="text-primary text-2xl mr-3" />
                <div>
                  <h3 className="font-medium">Education</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Cybersecurity, Cloud Architecture</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
                <FaBriefcase className="text-primary text-2xl mr-3" />
                <div>
                  <h3 className="font-medium">Experience</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Software Development, Customer Service</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center">
                <FaCode className="text-primary text-2xl mr-3" />
                <div>
                  <h3 className="font-medium">Projects</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Web Apps, Cloud Solutions, Telemedicine</p>
                </div>
              </motion.div>
            </motion.div>

            <div className="mt-8">
              <a
                href="/Dhairya Soni_LCL.pdf"
                download="Dhairya_Soni_Resume.pdf"
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="md:w-1/2 flex justify-center"
          >
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                  alt="Technology"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                  alt="Web Development"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80"
                  alt="Cloud Computing"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80"
                  alt="Cybersecurity"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
