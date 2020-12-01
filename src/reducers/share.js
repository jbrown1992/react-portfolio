import { ACTION_TYPES } from "../actions/shares";
const initialState = {
    list:[]
}


export const share = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_SHARES:
            return {
                //data is passed to here
                //then placed in list
                ...state,
                list:[...action.payload]
            }
        default:
            return state;
    }
}