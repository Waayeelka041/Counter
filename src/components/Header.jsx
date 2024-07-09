


import { useState } from "react"
function Header(){

const [isOpen, setIsOpen]=useState(false)
// 
// hanle the Menu 
const OpenMenu= () =>{
    setIsOpen(true)
}
const CloseMenu= () =>{
    setIsOpen(false)
}

    return <div className=" sm:flex justify-between  bg-orange-500  items-center p-6 text-white">
        <h1 className="font-bold text-4xl sm:text-2xl"> Counter App</h1>
        <p className="absolute right-2 top-6"><i  onClick={OpenMenu}  style={{display: isOpen == true ? "none" : " "}} class="fa-solid fa-bars text-4xl   sm:hidden"></i> 
          <i onClick={CloseMenu} style={{display: isOpen == true ? "flex" : ""}}  class="fa-solid fa-xmark text-4xl hidden "></i></p>
      
        <ul    style={{display: isOpen == true ? "flex" : " "}} className=" hidden  sm:flex flex-col sm:flex-row gap-4 sm:gap-10 text-2xl my-2">
            <li> Home</li>
            <li> About</li>
            <li> Service</li>
        </ul>
        <button   style={{display: isOpen == true ? "flex" : " "}}  className=" bg-white px-2 py-1 rounded text-black text-4xl hidden sm:flex"> Register</button>
    </div>
}

export default Header