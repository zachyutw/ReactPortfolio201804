import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';

import counter from 'reducers/counter';
import selectPages from 'reducers/selectPages';
import displayPage from 'reducers/displayPage';


export default combineReducers({
    counter,
    selectPages,
    displayPage,
    
});