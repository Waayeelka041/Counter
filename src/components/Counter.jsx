
import { useState } from "react"
function Counter(){

   const [counter, setCount]= useState(0)
// const [ isOn, setIsOn]= useState(false)

    // update the light on
    const increment= () => {
        setCount(counter +1);
       
    }
    // update the button off
    const Decrement= () => {
        setCount(counter -1);
        if(counter== 0){
            setCount(0)
        }
     
    }
    const Reset= () => {
        setCount(0);
     
    }
    return <div className="flex justify-center">
<div>
    <div counter  className="w-[350px] h-[100px] rounded-full text-center text-4xl font-bold border-2 border-black ml-16 mt-5">
       <span>{counter} </span>
         </div>
    <button   onClick={increment}  className="bg-orange-600 text-3xl px-3 py-2 m-3 ml-20   rounded">increment</button>
    <button  onClick={Decrement} className="bg-orange-600 text-3xl px-3 py-2 m-3 rounded">Decrement</button>
    <div className="ml-[200px]">
    <button  onClick={Reset} className="bg-orange-600 text-3xl px-3 py-2 m-3 rounded">Reset</button>
    </div>
</div>
    </div>
}

export default Counter