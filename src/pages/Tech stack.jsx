export default function TechStack(){
    const techStacks = [
        { id:1, name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { id:2, name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { id:3, name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { id:4, name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { id:5, name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { id:6, name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { id:7, name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { id:8, name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { id:9, name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { id:10, name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { id:11, name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { id:12, name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ];
    return(
        <div className="min-h-screen flex items-center flex-col justify-start gap-6 px-6 md:px-20 mt-5 md:mt-10">
            <div className="w-[255px] md:w-[335px] font-bold text-4xl">My Tech Stack</div>
            <div className="w-[300px] md:w-[550px] text-center font-normal md:text-2xl">Technologies i've been working with recently</div>
            <div className="grid grid-row-6 md:grid-rows-4 lg:grid-rows-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-20 mt-10 md:mt-16 px-6 md:">
                {
                 techStacks.map((techstack)=>(
                 <div key={techstack.id} className="bg-[#252446] h-[120px] w-[110px]  transition duration-200/50 transform hover:scale-110">
                   <img src={techstack.img} className="w-[120px] h-[80px]"/>
                   <div className="text-center font-medium">{techstack.name}</div>
                 </div>
                 ))
                }
            </div>
        </div>
    )
}