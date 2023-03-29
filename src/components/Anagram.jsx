import React,{useState} from "react";

export const Anagram=()=>{
const [string1,setString1]=useState("")
const [string2,setString2]=useState("")
const [anag,setAnag]=useState()

const isAnagram=()=>{

    const str1=string1.split("").sort().join("")
    const str2=string2.split("").sort().join("")

if(str1===str2) {
    setAnag(true)
}else{
    setAnag(false)
}
}
console.log(anag)
    return(
        <div style={{textAlign:"center"}}>
<h1 style={{textAlign:"center"}}>Anagram</h1>
<br />
<input onChange={(e)=>setString1(e.target.value)}/>
<br />
<input onChange={(e)=>setString2(e.target.value)}/>
<br />
<button onClick={isAnagram}>Compare</button>
<h2>{JSON.stringify(anag)}</h2>
        </div>
    )
}