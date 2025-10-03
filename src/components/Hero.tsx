import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-8 md:px-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Left Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight">
          Hi, I'm <span className="text-blue-600">Eslam Hekal</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
          A passionate Frontend Engineer specializing in React, TypeScript &
          Tailwind. I build modern, responsive, and high-performance web
          applications.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src="https://avatars.githubusercontent.com/u/149246191?v=4"
          alt="Eslam Hekal"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-lg border-4 border-blue-600 object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Hero;