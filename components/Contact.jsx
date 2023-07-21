import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full mx-auto px-2 py-20 flex flex-col gap-4 items-center justify-center dark:bg-bodyColor"
    >
      <div className="md:max-w-[50%] flex flex-col justify-center items-center gap-4">
        <h3 className="text-black dark:text-textGreen text-3xl py-6  font-bold animate-pulse">
          Get in Touch
        </h3>
        <p className="text-textDark text-medium px-11">
          Feel free to contact us if you need any kind of help... My inbox is
          always open wheter you a question or just want to say hi, I'll try my
          best to get back to you.
        </p>
      </div>
      <h3 className="text-black dark:text-textGreen text-2xl py-6  font-bold animate-pulse">
        Find me on..!
      </h3>
      <div className="flex items-center justify-center gap-8">
        <a href="#">
          <span className="w-10 h-10 text-xl dark:bg-hoverColor rounded-full inline-flex items-center justify-center dark:hover:text-textGreen cursor-porinter hover:scale-50  transition-all duration-300">
            <FaGithub />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center dark:hover:text-textGreen cursor-porinter hover:scale-50  transition-all duration-300">
            <FaLinkedin />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 text-xl dark:bg-hoverColor rounded-full inline-flex items-center justify-center dark:hover:text-textGreen cursor-porinter hover:scale-50  transition-all duration-300">
            <FaInstagram />
          </span>
        </a>
        <a href="#">
          <span className="w-10 h-10 text-xl dark:bg-hoverColor rounded-full inline-flex items-center justify-center dark:hover:text-textGreen cursor-porinter hover:scale-50 transition-all duration-300">
            <FaWhatsapp />
          </span>
        </a>
      </div>
      <button className="my-11 px-6 py-3 text-teal-800  hover:bg-textLight dark:text-textGreen dark:hover:bg-hoverColor tracking-wide duration-300 font-bold border border-textDark dark:border-textGreen rounded-lg">
        Let's Connect
      </button>
    </section>
  );
};

export default Contact;
