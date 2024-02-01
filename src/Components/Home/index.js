
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import saikumar from '../../images/saikumar.pdf'

import './index.css'

const Home=()=>{


    const download=()=>{

    }


    return(
        <section id="Home">


                <div className="home-container" > 
              
                <div><img className="image" src="https://res.cloudinary.com/dyjmh036b/image/upload/v1703510812/SAI_PRO_fhqa4f.jpg" alt="sai" /> </div>
                <div className="right-section">
                <div className="bio">
                    <p className="greeting">Hello, I'm </p> 
                    <h1 className="name">Sai Kumar Kindigeri</h1> 
                    <h4 className="profession">MERN Stack Developer</h4> 
                   <div className="buttons-container">
                   <a href={saikumar} download="saikumar.pdf"><button className="button-download" type="button" onClick={download}>Download CV</button> </a>
                    <a href="#Contact"><button className="buttons" type="button">Contact Info</button></a>
                   </div>
                </div> 
                <div className="social-handles"> 
                
               

                <a href="https://github.com/saikumarkindigeriDev" target="_blank"><FaGithub className="icon" /> </a>
                <a href="https://www.linkedin.com/in/saikumarkindigeri/" target="_blank">  <FaLinkedin className="icon" /></a>


                </div>
                </div>

                </div>  
                </section>
    )
}


export default Home