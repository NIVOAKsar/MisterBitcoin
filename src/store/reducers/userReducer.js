export default (state = null, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return JSON.parse(JSON.stringify(action.payload));
        case 'SIGN_UP':
            return JSON.parse(JSON.stringify(action.payload));
        case 'ADD_MOVE':
            let user = JSON.parse(JSON.stringify(state));
            user.moves.push(action.payload);
            return user;
        default:
            return JSON.parse(JSON.stringify(state));
    };
};