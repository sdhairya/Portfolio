import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaCode, 
  FaLaptopCode, 
  FaCloud, 
  FaTools, 
  FaUsers 
} from "react-icons/fa";
import { portfolioData } from "@/data/portfolioData";

const SkillsSection = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      setAnimated(true);
    }
  }, [isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2 text-primary">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="font-bold mb-6 text-xl flex items-center">
              <FaCode className="text-primary mr-2" /> Programming Languages
            </h3>

            {portfolioData.skills.programmingLanguages.map((skill, index) => (
              <div className="mb-4" key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-progress ${animated ? "animate-skill" : ""}`}
                    style={{
                      "--skill-percent": `${skill.level}%`,
                      width: animated ? `${skill.level}%` : "0%"
                    } as React.CSSProperties}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="font-bold mb-6 text-xl flex items-center">
              <FaLaptopCode className="text-primary mr-2" /> Frameworks & Technologies
            </h3>

            {portfolioData.skills.frameworks.map((framework, index) => (
              <div className="mb-4" key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{framework.name}</span>
                  <span>{framework.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className={`skill-progress ${animated ? "animate-skill" : ""}`}
                    style={{
                      "--skill-percent": `${framework.level}%`,
                      width: animated ? `${framework.level}%` : "0%"
                    } as React.CSSProperties}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="font-bold mb-6 text-xl flex items-center">
              <FaCloud className="text-primary mr-2" /> Cloud Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.cloudPlatforms.map((platform, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
                >
                  {platform}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="font-bold mb-6 text-xl flex items-center">
              <FaTools className="text-primary mr-2" /> DevOps Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.devOpsTools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h3 className="font-bold mb-6 text-xl flex items-center">
              <FaUsers className="text-primary mr-2" /> Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
