import api from "./api";
import { financial } from "../utils/financials";

export const ACTION_TYPES = {
    FETCH_ALL_TYPE: 'FETCH_ALL_TYPE',

}

export const fetchAll = () => dispatch => {
    api.type().fetchAll()
    .then(
        response => {
            dispatch({
                type:ACTION_TYPES.FETCH_ALL_TYPE,
                payload: response.data
            })
        }
    )
    .catch(err => console.log(err))
}
