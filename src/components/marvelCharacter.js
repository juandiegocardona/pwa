import React, { useState, useEffect } from "react";

function Marvel(){

    const [marvelCharacter, setCharacter] = useState([]);

    useEffect(()=>{
        if(!navigator.onLine){
            if(localStorage.getItem("character") === null) {
                console.log("No connection and no cache")
            } else {
                console.log("No connection and no cache")
                setCharacter(localStorage.getItem("character"));
            }
        } else {
            console.log("There is Connection")
            const URL = "https://gateway.marvel.com:443/v1/public/characters?ts=123456789&apikey=0a8f658676b9a0365df8571737da5cdb&hash=03fb50a6b3cadaa5887679d7bcbc7b32";
            fetch(URL).then(res=>res.json()).then(res=>{
                console.log(res.data.results[0].thumbnail.path)
                localStorage.setItem("character", res.data.results);
                setCharacter(res.data.results);
            })
        }
    }, []);

    return(
        <div>
        {marvelCharacter.map(marvelCharacter => (
            <div>
                <p>{marvelCharacter.name}</p>
                <img src={marvelCharacter.thumbnail.path + "/landscape_amazing." + marvelCharacter.thumbnail.extension} alt=""/>
            </div>
        ))}
        </div>
    )
}

export default Marvel;