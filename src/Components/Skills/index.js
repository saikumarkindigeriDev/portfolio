
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import './index.css'

const Skills=()=>(
    <section id="Skills">
        <div className="skills-container">
        <h1 className='main-heading'>My Skills</h1> 
    <div className="frontend-container"> 
    <h1 className='heading'>
        Frontend Skills
    </h1> 
  <ul className='skills'>
    <li className="list-item">
       <h1  className='skill-heading'> HTML </h1>
       <FaHtml5 className="icon" />
       
    </li> 
    <li className="list-item"><h1  className='skill-heading'>CSS</h1> 
    <FaCss3 className="icon" /></li> 
    <li className="list-item"><h1 className='skill-heading'>JavaScript</h1> 
    <IoLogoJavascript  className="icon"/>
</li> 
    <li className="list-item"><h1  className='skill-heading'>React Js</h1> 
    <FaReact className="icon" /></li>
  </ul>

    </div> 
    <div className="backend-container">
        <h1 className='heading'>Backend Skills</h1> 
        <ul className='skills'>
            <li className="list-item"> 
            <h1 className='skill-heading'>Python</h1> <FaPython  className="icon" />
            </li> 
            <li className="list-item"><h1  className='skill-heading'>Node Js</h1> <FaNodeJs className="icon"/>
 </li>
            <li className="list-item"><h1  className='skill-heading'>Express Js</h1> <SiExpress className="icon"/> </li> 
            <li className="list-item"><h1  className='skill-heading'>MySQL</h1> <SiMysql className="icon" /> </li> 

        </ul>
    </div> 

    
        </div>
    </section>
)


export default Skills