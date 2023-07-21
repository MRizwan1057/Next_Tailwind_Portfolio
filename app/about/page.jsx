import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";

import authorImg from "@/public/author.jpg";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto p-4 mx-auot py-10 lg:py-32 flex flex-col items-center gap-8 dark:bg-bodyColor"
    >
      <About />
    </section>
  );
};

export default AboutPage;
