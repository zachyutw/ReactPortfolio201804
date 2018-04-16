export const GET_GOOGLEPLACES_REQUEST = "places/GET_GOOGLEPLACES_REQUEST";
export const GET_GOOGLEPLACES_SUCCESS = "places/GET_GOOGLEPLACES_SUCCESS";
export const GET_GOOGLEPLACES_FAIL    = "places/GET_GOOGLEPLACES_FAIL";


export async function fetchGooglePlaceSearch(lat,long){

    let data ={}
    data.location=lat+","+long
    
    const URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=123.1207,49.2827&radius=100000&types=food&name=sushi&key=AIzaSyC2cDwwinLd867HkOywgBxw4bcy8tuPVqI";
    let request;
    let data = {
        keywords,radius,offset,page,extensions,sortrule,location,output:'json'
    }
    request = await axios.get("https://maps.googleapis.com/maps/api/place/radarsearch/json?key="+google_map_key,{
        params:{

        }
    })


    return {
        types: [GET_PLACES_REQUEST, GET_PLACES_SUCCESS, GET_PLACES_FAIL],
        promise: client =>  client.get( "https://maps.googleapis.com/maps/api/place/radarsearch/json?",
        {
            params:{
                key:'AIzaSyC2cDwwinLd867HkOywgBxw4bcy8tuPVqI',
                ...data
            }})
     
    };
}