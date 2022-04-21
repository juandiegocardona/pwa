import { useEffect, useState } from "react";

function Joke(){
    const [joke, setJoke] = useState("");
    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("joke") === null){
                setJoke("Loading...")
            } else {
                setJoke(localStorage.getItem("joke"))
            }
            
        } else {
            const url = "https://api.chucknorris.io/jokes/random";
            fetch(url).then(res=>res.json()).then(res=>{
                console.log("Res",res);
                localStorage.setItem("joke", res.value)
                setJoke(res.value);
            })
        }        
    }, []);

    return(
        <h2>{joke}</h2>
    )
}

export default Joke;