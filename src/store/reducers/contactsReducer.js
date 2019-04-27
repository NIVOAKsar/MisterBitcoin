export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS':
            return [...action.payload];
        case 'DELETE_CONTACT':
            return [...action.payload];
        default:
            return state;
    }
}