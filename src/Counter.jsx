import { useState } from "react"

export default function Counter(){
    const [count,setCount] =useState(5);

    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)

    }
    const handleRemove = () => {
        const newRem = count -1;
        setCount(newRem)
    }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>Counter:{count}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleRemove}>Reduce</button>
        </div>
    )
}