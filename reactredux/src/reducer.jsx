import { combineReducers } from 'redux';

const count = (state = 0, action) => {
    console.log('state');
    switch (action.type) {
        case 'COUNT_ADD':
            return state + 1
        default:
            return state
    }
}

const reducer = combineReducers({
    count
})

export default reducer;