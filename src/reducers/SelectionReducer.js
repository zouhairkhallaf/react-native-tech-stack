export default (state = null, action) => { // this is the initial readucer subState
    switch (action.type) {
        case 'select_library':
            return action.payload; 
        default:
            return state;
    }
    return null; // we don't have a row selected in the selection
};