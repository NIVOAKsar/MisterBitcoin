import { combineReducers } from 'redux';
import signedUserReducer from './signedUserReducer';
import contactReducer from './contactReducer';
import contactsReducer from './contactsReducer';


export default combineReducers({
    signedUser: signedUserReducer,
    contact: contactReducer,
    contacts: contactsReducer,
});