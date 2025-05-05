import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";
import { portfolioData } from "@/data/portfolioData";

const ExperienceSection = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2 text-primary">Experience & Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and academic qualifications.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FaBriefcase className="text-primary mr-2" /> Work Experience
            </h3>

            <div className="timeline">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="timeline-item relative pb-8"
                >
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <h5 className="text-primary font-medium mb-2">{exp.company}</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
                  <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <FaGraduationCap className="text-primary mr-2" /> Education
            </h3>

            <div className="timeline">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="timeline-item relative pb-8"
                >
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <h5 className="text-primary font-medium mb-2">{edu.institution}</h5>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{edu.period}</p>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
            <FaAward className="text-primary mr-2" /> Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md flex items-start"
              >
                <FaAward className="text-accent text-3xl mr-4 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
