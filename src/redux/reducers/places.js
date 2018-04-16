import {GET_PLACES_REQUEST,GET_PLACES_SUCCESS, GET_PLACES_FAIL} from 'actions/places';


const initState = {
    isLoading: false,
    data: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case GET_PLACES_REQUEST:
            return {
                ...state,
                isLoading: true,
                data: {},
                errorMsg: ''
            };
        case GET_PLACES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.result.data,
                errorMsg: ''
            };
        case GET_PLACES_FAIL:
            return {
                ...state,
                isLoading: false,
                data: {},
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}