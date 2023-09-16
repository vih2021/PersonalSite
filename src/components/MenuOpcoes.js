import React from 'react'
import { Link} from "react-scroll";

export default function MenuOpcoes() {

    function scrollToTargetAdjusted(element){
    var element = document.getElementById(element);
    var headerOffset = 110;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth",
    });
}

    return (
        <div className='menu'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
                <div className='itemMenu' onClick={()=>{  scrollToTargetAdjusted("home")}}>HOME</div>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                <div className='itemMenu' onClick={()=>{ scrollToTargetAdjusted("skill")}}>Skills</div>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                <div className='itemMenu' onClick={()=>{  scrollToTargetAdjusted("experience")}}>Experience</div>
            </Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                <div className='itemMenu' onClick={()=>{ scrollToTargetAdjusted("socialLinks")}}>GitHub/Social</div>
            </Link>
        </div>
    )
}