import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";

import authorImg from "@/public/author.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auot py-10 lg:py-16 flex flex-col items-center gap-8 dark:bg-bodyColor"
    >
      <div className="flex flex-col items-center justify-center lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 ">
          <h3 className="text-black dark:text-textGreen text-3xl font-semi-bold animate-pulse">
            About Me
          </h3>
          <p>
            As a Professional and Energetic MERN (MongoDB, Express.js, React.js,
            Node.js) Stack Developer, I bring a comprehensive skill set in
            <span className="text-teal-800 dark:text-textGreen">
              full-stack web and app development
            </span>
            . With expertise in both front-end and back-end technologies, I am
            capable of building and delivering high-quality web applications. My
            proficiency in
            <span className="text-teal-800 dark:text-textGreen">
              MongoDB, Express.js, React.js, and Node.js
            </span>
            allows me to design and develop efficient and scalable solutions. I
            have a strong understanding of RESTful API development, database
            management, and UI/UX design. Collaborative and detail-oriented, I
            thrive in fast-paced environments, working alongside
            cross-functional teams to successfully deliver projects. With a
            commitment to staying up-to-date with the latest technologies, I am
            dedicated to continuously enhancing my skills as a
            <span className="text-teal-800 dark:text-textGreen">
              MERN Stack Developer
            </span>
            . inventore consequunturinventore consequunturinventore
            consequunturinventore consequuntur {""}
            <span className="text-teal-800 dark:text-textGreen">
              Currently Working on :
            </span>
          </p>

          <ul className="max-w-[450px] text-sm grid grid-cols-2 gap-2 my-6">
            <li className="flex items-center gap-2">
              <span className="text-teal-800 dark:text-textGreen">
                <AiFillThunderbolt className="tex-indig0-700" />
              </span>
              React Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-800 dark:text-textGreen">
                <AiFillThunderbolt className="tex-indig0-700" />
              </span>
              Express js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-800 dark:text-textGreen">
                <AiFillThunderbolt className="tex-indig0-700" />
              </span>
              Node Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-800 dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next Js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-800 dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-800 dark:text-textGreen">
                <AiFillThunderbolt />
              </span>
              React Native
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <Image
                src={authorImg}
                alt="author image"
                className="rounded-lg object-cover"
                width="360"
                height="555"
              />

              <div className="hidden lg:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-80 border-2  border-textGreen  rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
