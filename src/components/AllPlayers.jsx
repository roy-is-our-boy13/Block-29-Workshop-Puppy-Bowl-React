import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";

const AllPlayers = () => 
{
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParm] = useState("");

    console.log(searchParam);

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
                    Search: <input 
                    type = "text"
                    placeholder="search"
                    onChange={(e) => setSearchParm(e.target.value)
                    }/>
                </label>
            </div>
    
            {playersToDisplay.map((player) => (
                <h3 key={player.id}>{player.name}</h3>
            ))}
        </>
    );
};
    

export default AllPlayers;
