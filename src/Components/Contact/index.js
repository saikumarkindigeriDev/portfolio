

import { Component } from 'react'
import { MdEmail } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import './index.css' 



class Contact extends Component{


    state={
        name:'',
        email:'',
        phone:'',
        message:'',
        shownError:false,
        showpError:false,
        
        showeError:false,
        data:{},
        fetched:false,
    } 















  

    changeMessage=e=>{
        this.setState({message:e.target.value})
    }

    changePhone=e=>{
        this.setState({phone:e.target.value})
    } 

    changeName=e=>{
        this.setState({name:e.target.value})
    }

    changeMail=e=>{
        this.setState({email:e.target.value})
       }


       submitForm=async(e)=>{
        e.preventDefault() 
        const {name,email,phone,message}=this.state  
        if (name===''){
            this.setState({shownError:true})
        }else if(name!=='') {
            this.setState({shownError:false})
        }

        if (email===''){
            this.setState({showeError:true})
        }else if(email!==''){
            this.setState({showeError:false})
        }

        if (phone===''){
            this.setState({showpError:true})
        }else if (phone!==''){
            this.setState({showpError:false})
        }

        const clientData={name,email,phone,message} 

        const options={
            method:'POST',
            headers: {
                'Content-Type': 'application/json', 
              },
              body: JSON.stringify(clientData)
        } 
       const url='http://localhost:2000/client' 

       if (name!=='',email!=='',phone!=='',message!==''){
        const response=await fetch(url,options) 
        const data=await response.json() 
        if (response.ok){
            this.setState({data:data,fetched:true,name:"",email:"",phone:'',message:''})
        }

       }
        







        
       
        
       }

       



    render(){
        const {name,email,shownError,showeError,showpError,showmError,phone,message,data,fetched} =this.state


    return(
     
       <section id="Contact">
       
       
       
       <p className='contact-para'>Get in Touch</p> 
       <h1 className='contact-heading' >Contact Me</h1>
       <div className='contact-container'> 
       <form onSubmit={this.submitForm} className='form-container'>
      
      
       <div className='form'>
       <div className='first-container'> 
          
          <input type="text" onChange={this.changeName} value={name} placeholder='Name'  className='input-container'/> 
           {shownError&&<p className='validation'>*Enter Name</p>}  
         
         
          <input type="email" onChange={this.changeMail} value={email} placeholder='Email'  className='input-container'/> 
           {showeError&&<p className='validation'>*Enter Mail</p>}
          
          
          <input type="number" onChange={this.changePhone} value={phone} placeholder='Phone Number'   className='input-container'/>
           {showpError&&<p className='validation'>*Enter Phone Number</p>}
         
           
           
               </div> 
           <div className='second-container'>
               <textarea type="text" value={message} onChange={this.changeMessage} placeholder='Message' 
               className='input-container-textarea'>

               </textarea> 
               
               <div className='mail-container'> 
               <MdEmail className='mail-icon' /> 
               <a href="mailto:saikumardev018@gmail.com" target="_blank"> <p className='mail'>saikumardev018@gmail.com</p></a>

               </div>
           </div> 
           
       </div>
       <button type="submit" className='submit-button'>Submit</button>
       {fetched&&<div className='status-con disappearing-text'>
        <IoIosCheckmarkCircleOutline className='check-icon' />
        <p className='disappearing-text'>  
       {data}</p> </div>}
      
      
       </form>
       </div>
   </section>

    )
}

}

export default Contact