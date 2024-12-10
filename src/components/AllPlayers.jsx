import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";

const AllPlayers = () => 
{
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");

    console.log(searchParam);

    useEffect(() => 
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

    const playersToDisplay = searchParam ? players.filter((player) => 
        player.name.includes(searchParam)) : players;

    return (
        <>
            <div>
                <label>
                    Search: <input 
                    type = "text"
                    placeholder = "search"
                    onChange={(e) => setSearchParam(e.target.value)
                    }/>
                </label>
            </div>
    
            {playersToDisplay.map((player) => (
                <>
                    <h3 key={player.id}>{player.name}</h3>
                </>
            ))}
        </>
    );
};
    
export default AllPlayers;