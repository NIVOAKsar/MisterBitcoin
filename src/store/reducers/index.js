import { combineReducers } from 'redux';
import userReducer from './userReducer';
import contactReducer from './contactReducer';
import contactsReducer from './contactsReducer';


export default combineReducers({
    signedUser: userReducer,
    contact: contactReducer,
    contacts: contactsReducer,
});