import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-20 w-full flex px-10 md:px-32 pt-4 justify-between items-center border-b-2">
      <div className="text-cyan-300 font-bold text-2xl">
        PORTFOLIO
      </div>
      <div className="flex justify-items-start">
      <div className=" hidden md:flex justify-around items-center w-[609px] font-medium">
        <div>
          <Link to="/" className="hover:underline">Home</Link>
        </div>
        <div>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
        <div>
          <Link to="/techstack" className="hover:underline">Tech stack</Link>
        </div>
        <div>
          <Link to="/projects" className="hover:underline">projects</Link>
        </div>
        <div>
          <Link to="/contact" className="hover:underline"> Contact </Link>
        </div>
        </div>
        <div className="w-[130px] flex justify-around items-center text-2xl">
          <div>
            <i className="fa-brands fa-github"></i>
          </div>
          <div>
            <i className="fa-brands fa-square-twitter"></i>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
        </div>
    </div>
  );
}
