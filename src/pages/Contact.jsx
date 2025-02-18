export default function Contact(){
    return(
        <div className=" h-[500px] flex flex-col justify-centre gap-20 items-center mt-10">
         <div className="font-bold text-4xl border-4 border-orange-400 text-orange-400 px-7 py-2">CONTACT</div>
         <form className="flex flex-col justify-center items-center w-[300px] md:w-[500px] gap-6">
         <input type="text" placeholder="ENTER YOUR NAME*" className="h-[40px] w-[300px] md:w-[500px] px-6 bg-[#252446]"></input>
         <input type="email" placeholder="ENTER YOUR EMAIL*" className="h-[40px] w-[300px] md:w-[500px]  px-6 bg-[#252446]"></input>
         <input type="number" placeholder="PHONE NUMBER" className="h-[40px] w-[300px] md:w-[500px]  px-6 bg-[#252446]"></input>
         <textarea placeholder="YOUR MESSAGE*" className="h-[80px] w-[300px] md:w-[500px] px-6 bg-[#252446]"></textarea>
         <button className="mt-6 w-[180px] h-[45px] font-bold bg-orange-400 text-black transform transition duration-500 hover:scale-120">SUBMIT</button>
         </form>
        </div>
    )
}