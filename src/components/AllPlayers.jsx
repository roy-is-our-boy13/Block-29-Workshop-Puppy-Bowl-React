import { useState, useEffect } from "react";
import { fetchAllPlayers, fetchSinglePlayer, removePlayer} from "../API";
import { useNavigate } from "react-router-dom";

const AllPlayers = () => 
{
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const navigate = useNavigate();

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

        if(player)
        {
            localStorage.setItem("DetailsOfThePlayer", JSON.stringify(player));
        