import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";

const AllPlayers = () => 
{
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);

    useEffecr(() => 
    {
        async function getAllPlayers()
        {
            const APIResponse = await fetchAllPlayers();
            console.log(APIResponse.data.players);

            if(APIResponse.success)
            {
                setPlayers(APIResponse.data.players);
            }
            else
            {
                setError(APIResponse.error.message);
            }
        }
        
        getAllPlayers();
    }, []);


    const playersToDisplay = players;

    return (
        <>
            <div>
                <label>
                    Search: <input />
                </label>
            </div>
    
            {playersToDisplay.map((player) => (
                <h3 key={player.id}>{player.name}</h3>
            ))}
        </>
    );
};
    

export default AllPlayers;
