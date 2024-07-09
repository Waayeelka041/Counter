
import { useState } from "react"
function Counter(){

   const [Tiriye, setCount]= useState(0)


    // update the button increment
    const increment= () => {
        setCount(Tiriye +1);
       
    }
    // update the button decrement
    const Decrement= () => {
        setCount(Tiriye -1);
        if(Tiriye== 0){
            setCount(0)
        }
     
    }
    const Reset= () => {
        setCount(0);
     
    }
    return <div className="flex justify-center">
<div>
    <div counter  className="w-[350px] h-[100px] rounded-full text-center text-4xl font-bold border-2 border-black ml-4 sm:ml-16 mt-20">
    <h1>{Tiriye} </h1>
         </div>
    <button   onClick={increment}  className="bg-orange-600 text-3xl px-3 py-2 m-3 sm:ml-20   rounded">increment</button>
    <button  onClick={Decrement} className="bg-orange-600 text-3xl px-3 py-2 m-3 rounded">Decrement</button>
    <div className="ml-[110px]  sm:ml-[200px]">
    <button  onClick={Reset} className="bg-orange-600 text-3xl px-3 py-2 m-3  rounded">Reset</button>
    </div>
</div>
    </div>
}

export default Counter