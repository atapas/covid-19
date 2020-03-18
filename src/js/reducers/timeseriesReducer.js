
const initialState = {
    timeseriesData: {},
    isFetching: false,
    isError: false
};

const timeseriesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'FETCH_TIMESERIES':
            return Object.assign({}, state, {
                isFetching: true,
                timeseriesData: {},
                isError: false
            });
        case 'FETCHED_TIMESERIES':
            return Object.assign({}, state, {
                isFetching: false,
                timeseriesData: action.data,
                isError: false
            });
        case 'RECIEVED_ERROR':
            return Object.assign({}, state, {
                isFetching: false,
                isError: true
            });
        default:
            return state;
    }
};

export default timeseriesReducer;