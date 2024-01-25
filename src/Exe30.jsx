    import React from "react";
    import { useState } from "react";

    export default function WordCounter(){
        const[ip,setIp] = useState("");
        const[character,setCharcount] = useState(0);
        const[word,setWord]=useState(0);
        const[vowel,setVowel]=useState(0);
        const[conso,setConso]=useState(0);
        const [spchar,setSpchar]=useState(0);

        function UpdateCount(a) {
            setIp(a);
            const vo= ["a","e","i","o","u"];
            a=a.trim();
            const b=a.spilt(" ").length;
            setWord(b);
            setCharcount(a.length-b+1);
        }
        

    }