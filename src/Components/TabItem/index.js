
import './index.css'

const TabItem=(props)=>{
    const {tabDetails,setActiveTab,isActive}=props 
    const {tabId,category}=tabDetails 


    const highlight=isActive?'highlighted button':'button' 

    const onClickTab=()=>{
        setActiveTab(tabId)
    } 

    return(
        <a href={`#${category}`}>
        <li className='list'>
           
            <button type="button"  className={highlight} onClick={onClickTab}>
                {category}
            </button>
           
        </li>
        </a>
    )
}


export default TabItem