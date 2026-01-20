export default function Projects() {
  const works = [
     {
      id: 1,
      img: "/doctor.png",
      name: "prescripto",
      desc: "prescripto is a smart and easy to use doctor appointment booking app",
      link: "https://github.com/NishuRawat06/prescripto",
    },
    {
      id: 2,
      img: "/article.webp",
      name: "ArticleX",
      desc: " article app using MERN stack",
      Live:"https://articlex123.netlify.app",
      link: "https://github.com/NishuRawat06/Tic-Tac-Toe",
    },
    {
      id: 3,
      img: "/rock-paper-scissors.jpg",
      name: "Stone-Paper-Scissor",
      desc: "stone-paper-scissor project using html,css and javascript",
      link: "https://github.com/NishuRawat06/stone-paper-scissor-game",
    },
    {
      id: 4,
      img: "/tic-tac-toe.png",
      name: "Tic-Tac-Toe",
      desc: " tic-tac-toe project using html,css and javascript",
      link: "https://github.com/NishuRawat06/Tic-Tac-Toe",
    },
    
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-10">
      <div className="font-bold text-4xl text-orange-400">PROJECTS</div>
      <div className="text-2xl">Things i've buit so far</div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-5 md:grid-rows-2 mt-5 gap-10">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-[#252446] w-[280px] lg:w-[350px] h-[520px] md:h-[450px] rounded-3xl text-center border-transparent hover:border-orange-400 border-4 transform transition duration-200/50 hover:scale-110"
          >
            <img
              src={work.img}
              className="h-[250px] w-[350px] rounded-t-3xl "
            />
            <div className="text-2xl pt-5">{work.name}</div>
            <div className="text-lg pt-5 px-5">{work.desc}</div>
            <div className=" md:flex space-y-4 md: justify-evenly items-center pt-5 text-xl text-orange-400">
              <div className="hover:cursor-pointer">
                <i className="fa-solid fa-link"></i><a href={work.Live} target="_blank" rel="noopener noreferrer">live preview</a>
              </div>
              <div className="hover:cursor-pointer">
                <i className="fa-brands fa-github"></i>
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  view code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
