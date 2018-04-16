import {SELECTED,DISPLAYNAV} from '../actions/selectPages';

/*
* 初始化state
 */

const initState = {
    selectPage: 'parenting',
    display:true
};
/*
* reducer
 */
export default function reducer(state = initState, action) {
  
    switch (action.type) {
       
        case SELECTED:
            return  { selectPage: action.selectPage};
        case DISPLAYNAV:
            return  { display: action.display};
        default:
            return state
    }
}
