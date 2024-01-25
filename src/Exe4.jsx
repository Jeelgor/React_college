import React from "react";
import { useState } from "react";

export default function ButtonOp(){
    const[tcolor,setTColor]=useState("White");
    const[bcolor,setBColor]=useState("Blue");

    return (
        <>
        <button onClick={()=>setTColor("Red")}>Red</button>
        <button onClick={()=>setTColor("Blue")}>Blue</button>
        <button onClick={()=>setTColor("Green")}>Green</button>
        <button onClick={()=>setTColor("Yellow")}>Yellow</button>
        <br/>
        <button onClick={()=>setBColor("Red")}>Red</button>
        <button onClick={()=>setBColor("Blue")}>Blue</button>
        <button onClick={()=>setBColor("Green")}>Green</button>
        <button onClick={()=>setBColor("yellow")}>Yellow</button>
   <p style={{color:tcolor,backgroundColor:bcolor}}>
   This is the text{" "}

   </p>
        </>
    )
    
}