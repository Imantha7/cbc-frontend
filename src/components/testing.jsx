import { useState } from "react";
import "./testing.css"

export default function Testing(){

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Student");

    function increamnt(){
        setCount(count + 1)
    }

    function decrement(){
        if(count >= 1){
            setCount(count - 1)
        }
        
    }

    function changeName(value){
        setName(value)
    }
    
    return(
        <div className="background">
            <h1>{name}</h1>
            <button className="val" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="val" onClick={increamnt}>+</button>  

            <div className="button-panel">
                <button onClick={()=>changeName("Student")}>Student</button>
                <button onClick={()=>changeName("Teacher")}>Teacher</button>
                <button onClick={()=>changeName("Admins")}>Admins</button>
            </div>
        </div>

    )
}