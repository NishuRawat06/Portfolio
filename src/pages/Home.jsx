import Footer from "../components/Footer.jsx";
import Intro from "../components/intro.jsx";
export default function Home(){
    return(
        <div className="min-h-screen flex flex-col justify-evenly">
            <Intro/>
            <Footer/>
        </div>
    )
}