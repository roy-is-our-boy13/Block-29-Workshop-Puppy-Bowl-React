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

export async function fetchSinglePlayer()
{
    try
    {
        const response = await fetch(`${baseUrl}players/${playerId}`);
        const result = await response.json();
        return result;
    }
    catch(error)
    {
        console.error(error);
    }
}

export async function addNewPlayer()
{
    try
    {

    }
    catch(error)
    {
        console.error(error);
    }
}
