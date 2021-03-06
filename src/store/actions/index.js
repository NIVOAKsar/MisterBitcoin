
/***** SERVICES *****/
import UserService from '../../services/UserService.js';
import BitcoinService from '../../services/BitcoinService.js';
import ContactService from '../../services/ContactService.js';

/***** BITCOIN ACTIONS *****/
export const getRate = (coins) =>
    async () => await BitcoinService.getRate(coins);

export const getMarketPrice = () =>
    async () => await BitcoinService.getMarketPrice();


export const getConfirmedTransactions = () =>
    async () => await BitcoinService.getConfirmedTransactions();

/***** USER ACTIONS *****/
export const signIn = () => async dispatch => {
    const response = await UserService.getUser();
    dispatch({ type: 'SIGN_IN', payload: response });
};

export const signUp = (username) => async dispatch => {
    const response = await UserService.signUp(username);
    dispatch({ type: 'SIGN_UP', payload: response });
};

export const addMove = (target, amount) => async dispatch => {
    const response = await UserService.addMove(target, amount);
    dispatch({ type: 'ADD_MOVE', payload: response });
};

/***** CONTACT ACTIONS *****/
export const fetchContact = (targetId) => async dispatch => {
    const response = await ContactService.getContactById(targetId);
    dispatch({ type: 'FETCH_CONTACT', payload: response });
};

export const fetchContacts = (filterBy) => async dispatch => {
    const response = await ContactService.getContacts(filterBy);
    dispatch({ type: 'FETCH_CONTACTS', payload: response });
};

export const deleteContact = (targetId) => async dispatch => {
    const response = await ContactService.deleteContact(targetId);
    dispatch({ type: 'DELETE_CONTACT', payload: response });
};

export const saveContact = (contact) => async dispatch => {
    await ContactService.saveContact(contact);
}

export const getEmptyContact = () => () => {
    return ContactService.getEmptyContact();
}






