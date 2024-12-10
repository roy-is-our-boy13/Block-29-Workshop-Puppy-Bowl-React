import { useState, useEffect } from "react";
import { addNewPlayer, fetchAllPlayers } from "../API";

const NewPlayerForm = () => 
{
    const [playerName, setPlayerName] = useState("");
    const [playerBreed, setPlayerBreed] = useState("");
    const [playerPhoto, setPlayerPhoto] = useState("");
    const [playerStatus, setPlayerStatus] = useState("bench");

    const inputPlayer = async (event) => 
    {
        event.preventDefault();

        try
        {
            const newPlayer = 
            {
                name: playerName,
                breed: playerBreed,
                photo: playerPhoto,
                status: playerStatus,
            };

            const addedPlayer = await addNewPlayer(newPlayer);
            console.log("New Player Added:", addedPlayer);

            if (addedPlayer.success) 
            {
                const updatedPlayers = await fetchAllPlayers();
                console.log("Updated Players:", updatedPlayers);
            } 
            else 
            {
                console.error("Error adding player:", addedPlayer.error.message);
            }
    
            //fetchAllPlayers();

            setPlayerName("");
            setPlayerBreed("");
            setPlayerPhoto("");
            setPlayerStatus("bench");

        }
        catch(error)
        {
            console.error(error);
        }

    };
    
    return(
        <>
            <div>
                <h2>New Player Form</h2>
                <form id="new-player-form" onSubmit={inputPlayer}>
                    <input
                        type="text"
                        id="nameOfThePlayer"
                        placeholder="Player Name"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)} required/>
                    <input
                        type="text"
                        id="breedOfThePlayer"
                        placeholder="Player Breed"
                        value={playerBreed}
                        onChange={(e) => setPlayerBreed(e.target.value)} required/>
                    <input
                        type="url"
                        id="photoOfThePlayer"
                        placeholder="Photo URL"
                        value={playerPhoto}
                        onChange={(e) => setPlayerPhoto(e.target.value)} required/>
                    <select
                        id="statusOfThePlayer"
                        value={playerStatus}
                        onChange={(e) => setPlayerStatus(e.target.value)}>
                        <option value="bench">Bench</option>
                        <option value="field">Field</option>
                    </select>
                    <button type="submit">
                        Add Player
                    </button>
                </form>
            </div>
        </>
    );
  };
  
  export default NewPlayerForm;