export default function Intro() {
  return (
    <div className="min-h-screen px-20 flex flex-col justify-evenly">
      <div className="flex justify-around items-center">
        <div className="w-[800px]">
          <span className="text-3xl">Hi</span>
          <br />
          <span className="font-bold text-4xl">I am Developer</span>
          <br />
          <span className="text-3xl">I Make The Complex simple.</span>
        </div>
        <div className="w-[200px] h-[200px] bg-amber-300 rounded-[50%]"></div>
      </div>
      <div className="flex justify-around">
        <div className="w-[280px] border-r-2">
          <div className="font-bold text-lg"> Email</div>
          <br />
          <div>rawatnishu378@gmail.com</div>
        </div>
        <div className="w-[280px] border-r-2">
          <div className="font-bold text-lg">Phone</div>
          <br />
          <div>+91 98113342xx</div>
        </div>
        <div className="w-[280px]">
          <div className="font-bold text-lg">Location</div>
          <br />
          <div>Delhi India</div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-20 text-4xl text-slate-700 ">
        <div>
          <i className="fa-brands fa-github hover:cursor-pointer"></i>
        </div>
        <div>
          <i className="fa-brands fa-square-twitter hover: cursor-pointer"></i>
        </div>
        <div>
          <i className="fa-brands fa-linkedin hover:cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}
