import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled, MdOutlineLocationOn } from "react-icons/md";

const ContactSection = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialLinks = [
    {
      icon: <FaLinkedinIn className="text-2xl" />,
      url: "https://www.linkedin.com/in/dhairya-soni-aa647a19a/",
      gradient: "from-blue-500 to-blue-700",
      label: "LinkedIn"
    },
    {
      icon: <MdOutlineMailOutline className="text-2xl" />,
      url: "mailto:sdhairya412@gmail.com",
      gradient: "from-red-500 to-red-700",
      label: "Email"
    },
    {
      icon: <MdOutlinePhoneEnabled className="text-2xl" />,
      url: "tel:+1(437)-669-0457",
      gradient: "from-green-500 to-green-700",
      label: "Phone"
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-2 text-primary">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for job opportunities, collaboration, or just to say hello.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-2/3"
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="flex items-start mb-8">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-xl mr-5 shadow-md flex items-center justify-center">
                  <MdOutlineMailOutline className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-lg">Email</h4>
                  <a
                    href="mailto:sdhairya412@gmail.com"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    sdhairya412@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-xl mr-5 shadow-md flex items-center justify-center">
                  <MdOutlinePhoneEnabled className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-lg">Phone</h4>
                  <a
                    href="tel:+1(437)-669-0457"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    +1(437)-669-0457
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-xl mr-5 shadow-md flex items-center justify-center">
                  <MdOutlineLocationOn className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-lg">Location</h4>
                  <p className="text-gray-700 dark:text-gray-300">Canada</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>

              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`bg-gradient-to-br ${link.gradient} text-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
