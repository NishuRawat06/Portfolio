import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
    const [isopen, setIsOpen] = useState(false); 
  
    const iconclick = () => {
      setIsOpen(!isopen); 
    };
  return (
    <div className="h-20 w-full flex px-10 md:px-32 pt-4 justify-between items-center border-b-2 bg-[#212032]">
      <div className="text-[#f86546] font-bold text-2xl">PORTFOLIO</div>
      <div className="flex justify-items-start">
        <div className=" hidden md:flex justify-around items-center w-[609px] font-medium">
          <div>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </div>
          <div>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </div>
          <div>
            <Link to="/techstack" className="hover:underline">
              Tech stack
            </Link>
          </div>
          <div>
            <Link to="/projects" className="hover:underline">
              projects
            </Link>
          </div>
          <div>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="text-3xl block md:hidden">
          <i
            className={isopen ? "fas fa-times" : "fas fa-bars"}
            onClick={iconclick}
          ></i>
        </div>
        {isopen && (
          <ul className="flex flex-col items-center justify-around fixed right-0 top-20  bg-black/50 w-[200px] h-[250px] z-50">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Techstack">Techstack</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
