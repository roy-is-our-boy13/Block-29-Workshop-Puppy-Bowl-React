import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";

const NewPlayerForm = () => 
{
    const [playerName, setPlayerName] = useState("");
    const [playerBreed, setPlayerBreed] = useState("");
    const [playerPhoto, setPlayerPhoto] = useState("");
    const [playerStatus, setPlayerStatus] = useState("bench");

    const inputPlayer = (event) => 
    {
        event.preventDefault();

        try
        {

        }
        catch(error)
        {
            
        }

    };
    
    return(
        <>
      
        </>
    );
  };
  
  export default NewPlayerForm;