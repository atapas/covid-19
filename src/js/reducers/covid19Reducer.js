
const covid19Reducer = (state = {}, action) => {
    switch(action.type) {
        case 'REGISTER_COVID_19_DATA' :
            state = action.payload;
            return state;
            break;
        default:
            return state;
            break;
    }
};

export default covid19Reducer;