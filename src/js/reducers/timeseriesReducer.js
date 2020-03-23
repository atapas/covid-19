
const timeseriesReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case 'REGISTER_COVID_TS_DATA':
            state = action.payload;
            return state;
            break;
        default:
            return state;
    }
};

export default timeseriesReducer;