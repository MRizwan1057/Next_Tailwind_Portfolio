const Project = () => {
  const projectsData = [
    {
      title: "Portfolio React Js",
      details: "It is a React js project for my personal portfolio",
    },
    {
      title: "News App React Native",
      details:
        "It is a React Native  News App using news api with some amazing features",
    },
    {
      title: "Blog Website",
      details:
        "It is Blog Website included to my personal projects using Mern Stack",
    },
    {
      title: "Dashboard React Js",
      details: "It is an Admin Panel created with React Js",
    },
    {
      title: "E-Commerce Store",
      details:
        "E-Commerce Store using Node js Express js React js and Mongo DB",
    },
    {
      title: "Todo App",
      details: "Todo App using React js for task management",
    },
    {
      title: "React Website",
      details: "A Simple React Js website",
    },
    {
      title: "Digital Watch",
      details: "A Digital Watch App using React js",
    },
  ];
  return (
    <>
      <section
        id="projects"
        className="w-full mx-auto px-12 py-20 flex flex-col gap-4 items-center justify-center"
      >
        <div className="py-5 mx-auto text-center space-y-5 ">
          <h3 className="text-black dark:text-textGreen text-3xl font-semi-bold animate-bounce">
            Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {projectsData.map((p, ind) => (
            <div
              key={ind}
              class="max-w-md md:w-[500px] md:h-[200px]  p-6 bg-white dark:bg-bodyColor border border-textLight rounded-lg dark:shadow-textGreen dark:bodyColor dark:border-textLight"
            >
              <h5 class="text-teal-800 dark:text-textGreen mb-2 text-2xl font-semi-bold tracking-tight">
                {p.title}
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {p.details}
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-textDark rounded-lg hover:bg-teal-800  hover:text-textDark dark:bg-textDark dark:hover:bg-textGreen"
              >
                GitHub Repo
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

// const sProject = () => {
//   return (
//     <>
//       {ProjectsData.map((p, ind) => (
//         <ProjectCard key={ind} Project={p} />
//       ))}
//     </>
//   );
// };

export default Project;
