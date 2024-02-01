


import './index.css' 


const Projects=()=>(
    <section id="Projects" >
       <p className='paraa'>Browse My Recent</p> 
            <h1 className='project-heading'>Projects</h1>
            
            <div className='projects-container'>
            <div className='items-container'> 
            <div className='project'>
                <img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1706520714/Online-job-search_fg7kyx.jpg" alt="jobby" className='pro-image'/> 
                
        <h1 className='project-name'>Jobby App</h1> 
            <div className='buttons-container'>
 <a href="https://github.com/saikumarkindigeriDev/jobby_app.git" target="_blank">   <button type="button" className='but' >GitHub</button> </a>
   
    <a href="https://saikumarjobby.ccbp.tech/" target="_blank"> <button type="button" className='but'>Live Demo</button> </a>
</div>
            </div>
            <div  className='project'> 
                <img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1706520914/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc_w600-h300-pc0xffffff-pd_o8ryrs.png" alt="nxt watch" className='pro-image' />
                <h1 className='project-name'>Nxt Watch</h1> 
<div className='buttons-container'>
   
   <a href="https://github.com/saikumarkindigeriDev/nxtwatch.git" target="_blank"> <button type="button" className='but'>GitHub</button> </a>
    <a href="https://ksainxtwatch.ccbp.tech/" target="_blank"> <button type="button" className='but'>Live Demo</button> </a>
            </div>
            </div>
            <div  className='project'>
                <img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1706521326/white-sale-slide-template-presentation_1262-19299.jpg_wviyhq.jpg"  alt="nxt trndz" className='pro-image' /> 
                <h1 className='project-name'>Nxt Trendz</h1> 


                <div className='buttons-container'>
   <a href="https://github.com/saikumarkindigeriDev/NxtTrendz_Ecommerce.git" target="_blank"> <button type="button" className='but' >GitHub</button> </a>
    <a href="https://sainxtcart.ccbp.tech/" target="_blank"><button type="button"  className='but'>Live Demo</button></a>
            </div>
                
                </div>
            

        </div> 
        </div>
    </section>
)


export default Projects