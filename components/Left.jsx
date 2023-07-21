import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Left = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text- textLight">
      <div className="flex flex-col gap-4">
        <a href="#">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-teal-800 dark:hover:text-textGreen cursor-porinter hover:-translate-y-2 transition-all duration-300">
            <FaGithub />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-teal-800 dark:hover:text-textGreen cursor-porinter hover:-translate-y-2 transition-all duration-300">
            <FaLinkedin />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-teal-800 dark:hover:text-textGreen cursor-porinter hover:-translate-y-2 transition-all duration-300">
            <FaInstagram />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-teal-800 dark:hover:text-textGreen cursor-porinter hover:-translate-y-2 transition-all duration-300">
            <FaWhatsapp />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  );
};

export default Left;
