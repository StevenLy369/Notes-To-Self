import formVisibleReducer from './form-visible-reducer'
import kombunchaListReducer from './kombuncha-list-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    formVisibleOnPage: formVisibleReducer,
    kombunchaList: kombunchaListReducer,
})

export default rootReducer;