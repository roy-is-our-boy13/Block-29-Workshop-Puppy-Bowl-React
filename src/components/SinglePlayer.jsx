import { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API";
import { useNavigate, useParams } from 'react-router-dom';


const SinglePlayer = () => 
{
    const [playerData, setPlayerData] = useState(null);
    const navigate = useNavigate();
    const { playerId } = useParams();

    useEffect(() => 
    {
        const getPlayerData = async () => 
        {
            try
            {
                const data = await fetchSinglePlayer(playerId);
            
                if (data?.player) 
                {
                    console.log("data?.player", data.player);
                    setPlayerData(data.player);
                } 
                else 
                {
                    console.error("Player data could not be fetched");
                }
            }
            catch (error) 
            {
                console.error("Error fetching player data:", error);
            }
        };

        if(playerId)
        {
            console.log("Player ID:", playerId);
            getPlayerData();
        }

    }, [playerId]);

    const goBack = () => 
    {
        navigate(-1);
    };
    
    if (!playerData) 
    {
        return( <>
            <p>No player data found!</p> 
            <button onClick={goBack}>Back</button>
            </>);
    }

    
    const photo = playerData?.imageUrl || "https://via.placeholder.com/150";

    return(
        <>
            <section>
                <img src={photo} alt={playerData?.name || "Player Photo"} />
                <h3>{playerData?.name || "Name not available"}</h3>
                <p><b>ID:</b> {playerData?.id || "No ID"}</p>
                <p><b>Breed:</b> {playerData?.breed || "No Breed"}</p>
                <p><b>Status:</b> {playerData?.status || "No Status"}</p>
                <button onClick={goBack}>Back</button>
            </section>
        </>
    );
}

export default SinglePlayer;