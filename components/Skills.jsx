import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  BiLogoJava,
  BiLogoGithub,
  BiLogoHeroku,
  BiLogoFirebase,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoWordpress,
  BiLogoNetlify,
} from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiPhp,
  SiPostman,
  SiExpress,
  SiTailwindcss,
  SiJquery,
  SiMongodb,
} from "react-icons/si";
import { DiDart } from "react-icons/di";
import {
  TbBrandVscode,
  TbBrandReactNative,
  TbBrandNextjs,
  TbBrandMysql,
} from "react-icons/tb";

const Skills = () => {
  return (
    <section id="skills" className="">
      <div className="py-5 mx-auto text-center space-y-5 ">
        <h3 className="text-black dark:text-textGreen text-3xl font-semi-bold animate-bounce">
          Skills
        </h3>
      </div>

      <div className="skillwrp py-4">
        <div className="py-3 space-y-5 ">
          <h3 className="text-teal-800 dark:text-textGreen font-bold animate-pulse">
            Programming Languages
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              JavaScript
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <RiJavascriptFill />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Java
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <BiLogoJava />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Dart
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <DiDart />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              PHP
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <SiPhp />
            </span>
          </div>
        </div>
      </div>
      <div className="skillwrp py-4">
        <div className="py-3 space-y-5 ">
          <h3 className="text-teal-800 dark:text-textGreen font-bold animate-pulse">
            Tools I Use
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              VS Code
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <TbBrandVscode />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              GitHub
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <BiLogoGithub />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Postman
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <SiPostman />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Heruko
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <BiLogoHeroku />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Firebase
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <BiLogoFirebase />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Netlify
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <BiLogoNetlify />
            </span>
          </div>
        </div>
      </div>

      <div className="skillwrp py-4">
        <div className="py-3 space-y-5 ">
          <h3 className="text-teal-800 dark:text-textGreen font-bold animate-pulse">
            Basics
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              HTML
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <BiLogoHtml5 />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              CSS
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <BiLogoCss3 />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              JavaScript
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <RiJavascriptFill />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              WordPress
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <BiLogoWordpress />
            </span>
          </div>
        </div>
      </div>

      <div className="skillwrp py-4">
        <div className="py-3 space-y-5 ">
          <h3 className="text-teal-800 dark:text-textGreen font-bold animate-pulse">
            Libraries & Frameworks
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Node Js
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <FaNodeJs />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Express Js
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <SiExpress />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:bg-hoverColor/20 cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              React JS
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <FaReact />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              React Native
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <TbBrandReactNative />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Next Js
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <TbBrandNextjs />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Bootsrap
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <FaBootstrap />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Tailwind CSS
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <SiTailwindcss />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Ajax
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <FaReact />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              JQuery
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <SiJquery />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Others
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <FaReact />
            </span>
          </div>
        </div>
      </div>

      <div className="skillwrp py-4">
        <div className="py-3 space-y-5 ">
          <h3 className="text-teal-800 dark:text-textGreen font-bold animate-pulse">
            DataBases
          </h3>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Mongo DB
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <SiMongodb />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              MySql
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <TbBrandMysql />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Firebase RT DB
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <BiLogoFirebase />
            </span>
          </div>
          <div className="flex flex-col gap-4  w-full p-6 items-center justify-center mx-auto rounded-lg shadow shadow-textDark bg-textLight dark:shadow-textGreen dark:bg-hoverColor hover:shadow-none hover:bg-hoverColor/20 duration-300 ease- cursor-pointer">
            <h5 className="mb-2   font-bold tracking-wide text-dark dark:text-textLight">
              Others
            </h5>
            <span className="font-medium text-teal-800 dark:text-textGreen">
              <FaReact />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
