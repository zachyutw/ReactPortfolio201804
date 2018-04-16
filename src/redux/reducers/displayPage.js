import {DISPLAYNAV} from '../actions/selectPages';
/*
* 初始化state
 */

const initState = {
    display: true
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
  
    switch (action.type) {
       
        case DISPLAYNAV:     
         
            return  { display: action.display};
        default:
            return state
    }
}
