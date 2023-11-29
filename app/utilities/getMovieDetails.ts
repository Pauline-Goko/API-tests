export async function getMovieDetails(movieId:number){
    const url = `/api/get-movies-details/${movieId}`;
    try{
        const response = await fetch (url);
        if(!response.ok){
            return `Movie with ${movieId} not found`
        }
        const result= await response.json()
        return result;
    }
    catch(error){
        return error;
    }
}