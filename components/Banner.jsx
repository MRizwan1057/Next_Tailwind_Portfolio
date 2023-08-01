"use client";
import { delay, motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="mx-auto py-10 md:py-15 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg tracking-wide text-teal-800 dark:text-textGreen"
      >
        Welcome to the portfolio of
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-dark dark:text-textLight text-3xl md:text-4xl  lg:text-6xl font-semibold flex flex-col"
      >
        Muhammad Rizwan
        <span className="text-textDark text-2xl md:text-4xl lg:text-5xl mt-2 lg:mt-4">
          Web & App Developer...
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        "Meet a versatile Web and App Developer, the tech enthusiast with a
        passion for crafting seamless digital experiences. With a flair for both
        front-end and back-end development, they turn ideas into reality,
        blending innovation with functionality. Get ready to witness captivating
        websites and mobile applications that leave users in awe."
        <a href="#" className="block">
          <span className="text-teal-800 dark:text-textGreen  inline-flex relative cursor-pointer h-7  overflow-x-hidden group">
            Get to Know
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm border border-teal-800 dark:border-textGreen rounded-md text-teal-800 dark:text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        Check out My Projects
      </motion.button>
    </section>
  );
};

export default Banner;
