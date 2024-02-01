import { Component } from "react"; 
import Home from "./Components/Home";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import About from './Components/About' 
import Skills  from "./Components/Skills";
import Projects from './Components/Projects'
import Contact from './Components/Contact'

import './App.css' 




class App extends Component{
    state={
        menuClicked:false,
    }

closeMenu=()=>{
    this.setState({menuClicked:false})
}
    toggleMenu=()=>{
        this.setState(prevState=>({menuClicked:!prevState.menuClicked}))
    }

    render(){
        const {menuClicked}=this.state 
console.log(menuClicked)

        return(
            <div className="portfolio-container"> 
            <div className="header-container">
          <div className="name-container">
          <a href="#Home"><h1 className="sai-heading">Sai Kumar Kindigeri</h1></a>
         
          </div>
           

          
           <nav className="nav-bar-desktop" >
           

        
            <ul className="nav-container"> 

                <a href="#Home">
                <li className="list " key="1" tabIndex="-1" >
                                <button type="button" className="button" >Home</button>
                    </li>
                </a>
<a href="#About">
<li className="list" key="2" >
                                <button type="button" className="button">About</button>
                    </li>
</a>
             <a href="#Skills">
             <li className="list " key="3">
                                <button type="button" className="button" >Skills</button>
                    </li>
             </a>
                   <a href="#Projects">
                   <li className="list " key="4">
                                <button type="button" className="button" >Projects</button>
                    </li>
                    </a> 
                    <a href="#Contact">
                    <li className="list " key="5" >
                                <button type="button" className="button" >Contact</button>
                    </li>
                    </a>
                    


          </ul>
                   </nav> 


                  {menuClicked ? 
                 <nav className="nav-bar-mobile" >
                  <button type="button" className="menu-icon" onClick={this.closeMenu}><RxCross2 /></button>
                  
                 


          

        
            

               
               <a href="#Home">
               <li className="list " key="1" tabIndex="-1" >
                               <button type="button" className="button" onClick={this.toggleMenu}>Home</button>
                   </li>
               </a>
<a href="#About">
<li className="list" key="2" >
                               <button type="button" className="button" onClick={this.toggleMenu}>About</button>
                   </li>
</a>
            <a href="#Skills">
            <li className="list " key="3">
                               <button type="button" className="button" onClick={this.toggleMenu}>Skills</button>
                   </li>
            </a>
                  <a href="#Projects">
                  <li className="list " key="4">
                               <button type="button" className="button" onClick={this.toggleMenu}>Projects</button>
                   </li>
                   </a> 
                   <a href="#Contact">
                   <li className="list " key="5" >
                               <button type="button" className="button" >Contact</button>
                   </li>


                   </a>
             

                   

                   
                   


       
                  </nav> :<button type="button" className="menu-icon" onClick={this.toggleMenu}> <GiHamburgerMenu   /></button>}
           
            </div>
          <Home />

            <Skills /> 
            <About /> 
            <Projects /> 
            <Contact /> 
            <div className="header-container">
         
           <div>
             
           </div>
            </div>
            <div className="footer">
           <nav className="nav-bar">
           

        
            <ul className="nav-container"> 

                <a href="#Home">
                <li className="list " key="1" tabIndex="-1" >
                                <button type="button" className="button" >Home</button>
                    </li>
                </a>
<a href="#About">
<li className="list" key="2" >
                                <button type="button" className="button">About</button>
                    </li>
</a>
             <a href="#Skills">
             <li className="list " key="3">
                                <button type="button" className="button" >Skills</button>
                    </li>
             </a>
                   <a href="#Projects">
                   <li className="list " key="4">
                                <button type="button" className="button" >Projects</button>
                    </li>
                    </a> 
                    <a href="#Contact">
                    <li className="list " key="5" >
                                <button type="button" className="button" >Contact</button>
                    </li>
                    </a>
                    


          </ul>
                   </nav>  
                   <p className="copyright">Copyright © 2024 Sai Kumar Kindigeri. All Rights Reserved.

</p>
           </div>
           
        </div>
        )
    }
}
    export default App


