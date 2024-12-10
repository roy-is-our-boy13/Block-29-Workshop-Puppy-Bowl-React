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
            const data = await fetchSinglePlayer(playerId);
            
            if (data?.player) 
            {
                console.log(data.player);
                setPlayerData(data.player);

            } else 
            {
                console.error("Player data could not be fetched");
            }
        };

        if(playerId)
        {
            console.log(playerId);
            getPlayerData();
        }

    }, [playerId]);

    const goBack = () => 
    {
        navigate(-1);
    };
    
    if (!playerData) 
    {
        return <p>No player data found!</p>;
    }

    
    const photo = playerData.photoUrl || "https://via.placeholder.com/150";

    return(
        <>
            <section>
                <img src={photo} alt={playerData.name} />
                <h3>{playerData.name}</h3>
                <p><b>ID:</b> {playerData.id}</p>
                <p><b>Breed:</b> {playerData.breed}</p>
                <p><b>Status:</b> {playerData.status}</p>
                <button onClick={goBack}>Back</button>
            </section>
        </>
    );
}

export default SinglePlayer;