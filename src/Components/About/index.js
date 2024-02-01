import { SlBadge } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa"; 



import './index.css'

const About=()=>(
    <section  id="About"> 

    <div className="about-container">
    <h1 className="main-heading">About Me</h1> 
    <div className="about-inside-container" >
        <div className="qualification-container"> 
      <SlBadge/>
        <h1 className="heading">Fresher</h1> 
        <p className="para">MERN Stack Developer</p>

        </div>
        <div className="qualification-container"> 
       
        < FaGraduationCap />
            <h1 className="heading">Education</h1> 
            <p className="para">B.Sc Bachelor of Science</p>

        </div>
        </div>
        <div className="description">
            <p className="text">Motivated B.Sc graduate with expertise in both front-end and back-end web development.
                 Seeking a dynamic role to apply technical skills and creative problem-solving for innovative web solutions</p>
        </div>
    </div>
  
</section>
)


export default About