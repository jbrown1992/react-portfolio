import api from "./api";

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL_SHARES: 'FETCH_ALL_SHARES',

}

export const fetchAll = () => dispatch => {
    api.share().fetchAll()
    .then(
        response => {
            //Disatch called with action
            //response data is passed into the reducer
            dispatch({
                type:ACTION_TYPES.FETCH_ALL_SHARES,
                payload: response.data
            })
        }
    )
    .catch(err => console.log(err))
}

