import { useRef } from "react";

const Input=({handleronClick1})=>{
    
    const handleronClick=()=>{
        handleronClick1(word.current.value)
        word.current.value=""
    }

    const word=useRef();
    return <div>
        <input type="text" 
        ref={word}
        className="input"placeholder="Enter the city name" />
        <button type="button"
        onClick={handleronClick}
        >Search</button>
    </div> 
}
export default Input;