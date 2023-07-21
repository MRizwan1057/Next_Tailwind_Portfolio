"use client";
import Left from "@/components/Left";
import Right from "@/components/Right";
import Banner from "@/components/Banner";
import { delay, motion } from "framer-motion";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      {/* left section */}
      <div className="w-full xl:flex items-center pt-20 justify-between dark:bg-bodyColor">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <Left />
        </motion.div>

        {/* middle section */}
        <div className="max-w-[80%] mx-auto p-4">
          <Banner />
          <About />
          <Skills />
          {/* <Footer /> */}
        </div>

        {/* right section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <Right />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
