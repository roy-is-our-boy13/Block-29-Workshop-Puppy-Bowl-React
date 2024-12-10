const COHORT = "2109-UNF-HY-WEB-PT";
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers()
{
    try
    {
        const response = await fetch(`${baseUrl}/players`);
        const result = await response.json();
        return result;
        
    }
    catch(error)
    {
        console.error(error);
    }
}

export async function fetchSinglePlayer(playerId)
{
    try
    {
        const response = await fetch(`${baseUrl}/players/${playerId}`);

        if (!response.ok) 
        {
            throw new Error('Player data not found.');
        }

        const result = await response.json();
        return result;
    }
    catch(error)
    {
        console.error(error);
    }
}

export async function addNewPlayer(playerObj)
{
    try
    {
        const response = await fetch(`${baseUrl}/players`, 
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(playerObj),
        });
            
        if (!response.ok) 
        {
            throw new Error(`API returned status ${response.status}`);
        }
        const result = await response.json();
        return result;
    }
    catch(error)
    {
        console.error(error);
    }
}

export async function removePlayer(playerId)
{
    try
    {
        const response = await fetch(`${baseUrl}/players/${playerId}`, 
        {
            method: 'DELETE',
        });
    
        if (!response.ok) 
        {
            throw new Error(`Unable to remove the player with the specified ID ${playerId}`);
        }
    }
    catch(error)
    {
        console.error(error);
    }
}