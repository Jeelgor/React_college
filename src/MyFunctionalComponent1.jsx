import * as React from "react";
import { useState } from "react";   //react hook start word by use
export default function Fun1(){
    const [name,setname] = useState("Myname");
    const [age,setage] = useState(99);
    return (<>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/><br/>
    <p>Name: {name}</p>
    <br/>
    
    <input type="number" value={age} onChange={(e)=>setage(e.target.value)}/>

    <p>Age: {age}</p>
    <br/>
    </>
    );

}