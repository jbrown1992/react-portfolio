import { ACTION_TYPES } from "../actions/type";
const initialState = {
    list:[]
}


export const type = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL_TYPE:
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