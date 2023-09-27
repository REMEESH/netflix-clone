import React, { useEffect, useState } from 'react'
import  './Nav.css'

function Nav() {
    const [show,setShow] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll",()=>{
        if(window.scrollY>600){
           setShow(true)
        }else{
            setShow(false)
        }
      })    
    })
    // console.log(show);
  return (
    <div  className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://www.cdnlogo.com/logos/n/4/netflix.svg" alt="netflix logo" />
    </div>
  )
}

export default Nav