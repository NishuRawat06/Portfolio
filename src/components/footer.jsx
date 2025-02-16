export default function Footer() {
  return (
    <div className="w-full h-[80px]  md:flex items-center px-20 md:px-32 justify-between border-t-2 border-white space-y-5 md:space-y-0">
      <div className="w-[220px] md:w-[450px] text-center md:text-start text-m md:text-xl">
        Designed and built by <span className="text-orange-400">Nishu</span>{" "}
        with <span className="text-orange-400">Love</span>
      </div>
      <div className="w-[220px] md:w-[600px] md:flex justify-between items-center text-center md: space-y-5 md:space-y-0">
        <div>
          <a href="mailto:rawatnishu378@gmail.com" className="text-m md:text-xl mr-12">rawatnishu378@gmail.com</a>
        </div>
        <div className="text-m md:text-xl">Delhi India</div>
        <div className="w-[150px] flex justify-between gap-5 text-4xl text-slate-700 mx-auto">
          <div>
            <a
              href="https://github.com/NishuRawat06"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <i className="fa-brands fa-github hover:cursor-pointer"></i>
            </a>
          </div>
          <div>
            <i className="fa-brands fa-square-twitter hover: cursor-pointer"></i>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nishu-rawat-7a04622a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              <i className="fa-brands fa-linkedin hover:cursor-pointer"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
