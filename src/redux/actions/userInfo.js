export const GET_USERINFO_REQUEST  = 'userInfo/GET_USERINFO_REQUEST';
export const GET_USERINFO_SUCCESS  = 'userInfo/GET_USERINFO_SUCCESS';
export const GET_USERINFO_FAIL  = 'userInfo/GET_USERINFO_FAIL';

export const LOGOUT = 'userInfo/LOGOUT';

export function fetchUserInfo(user_info){
    return {
        types: [GET_USERINFO_REQUEST, GET_USERINFO_SUCCESS, GET_USERINFO_FAIL],
        promise: client =>  client.post('https://roro.one/api/oauth/token',
        {
                client_secret:'YuKRs62c8rcmq2F58jXnVm9QksSVNsSvdsJxcJPZ',
                client_id:'2',
                grant_type:'password',
                ...user_info
        
        }
        )
    };
}

export function logoutUser(){
    let logout={}
    return {
        type:LOGOUT,
        logout
    }
}