import { useState, useEffect } from "react";
import { fetchAllPlayers, fetchSinglePlayer, removePlayer} from "../API";

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


    const handleSeeDetails = async (playerId) => 
    {
        const player = await fetchSinglePlayer(playerId);
        console.log(player);

        localStorage.setItem("DetailsOfThePlayer", JSON.stringify(player));
        
        //window.location.href = "detailsPage.html";
    };


    const handleRemove = async (playerId) => 
    {
        await removePlayer(playerId);
        const updatedPlayers = await fetchAllPlayers();
        
        if (updatedPlayers.success) 
        {
            setPlayers(updatedPlayers.data.players);
        } 
        else 
        {
            setError(updatedPlayers.error.message);
        }
    };

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
                <div key={player.id} className="player-card">
                <h3>{player.name}</h3>
                <button
                    className="detailsButton"
                    onClick={() => handleSeeDetails(player.id)}>
                    See Details
                </button>
                <button
                    className="removeButton"
                    onClick={() => handleRemove(player.id)}>
                    Remove
                </button>
            </div>
            ))}
        </>
    );
};
    
export default AllPlayers;