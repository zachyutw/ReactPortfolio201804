export const GET_GEOLOCATION = 'geolocation/GET_GEOLOCATION';

export function fetchGeoLocation(position){
    return {
        type: GET_GEOLOCATION,
        position
    }
}