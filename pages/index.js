import Navbar from "../components/navbar"
import Banner from "../components/banner";
import Courses from "../components/courses";
import Partners from "../components/partners";
import Tutors from "../components/tutors"
import Footer from "../components/Footer";


export default function Home({menu}) {
  return (
  
    <>
      <Navbar />
    
       <Banner />
       <Courses />
       <Partners /> 
       <Tutors />
       
       <Footer/>
       </>
      
    
    )

  }

