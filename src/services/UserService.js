
import UtilService from '../services/UtilService.js';
const USER_KEY = 'USER';
var user = {};

function getEmptyUser() {
    return {
        name: "",
        coins: 100,
        moves: []
    }
}

async function getUser() {
    if (UtilService.loadFromStorage(USER_KEY));
    user = UtilService.loadFromStorage(USER_KEY);
    // return JSON.parse(JSON.stringify(user));
    return user;
}

async function signUp(username) {
    user = _createUser(username);
    UtilService.saveToStorage(USER_KEY, user);
    // return JSON.parse(JSON.stringify(user));
    return user;
}

function addMove(contact, amount) {
    let move = _createMove(contact, amount);
    user.moves.push(move);
    UtilService.saveToStorage(USER_KEY, user);
    return move;
}

function _createUser(username) {
    return {
        name: username,
        coins: 100,
        moves: []
    }
}

function _createMove(contact, amount) {
    return {
        _id: UtilService.makeId(),
        to: contact.name,
        at: Date.now(),
        amount: amount,
    }
}

export default {
    getUser,
    getEmptyUser,
    signUp,
    addMove
}