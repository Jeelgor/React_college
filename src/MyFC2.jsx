import * as React from "react";
import { useState,useEffect } from "react";
function feactData() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id:1,name:"Jeel"});
        },3000);
    });
}
export default function Fun2(){
    const [id,setId]=useState("loading....");
    const [name,setname]=useState("loading....");   
    useEffect(()=>{
        feactData().then((user)=>{    
            setId(user.id);
            setname(user.name);
        });
    }, );
    return (<>
        <p>ID:{id}</p>
        <p>NAME:{name}</p>
    </>
    );
}