import api from "./api";
import { financial } from "../utils/financials";

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL',

}

export const fetchAll = () => dispatch => {
    api.option().fetchAll()
    .then(
        response => {
            //Disatch called with action
            //response data is passed into the reducer
            dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        }
    )
    .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    calculateProfit(data)
    formatAsCurrency(data)
    api.option().create(data)
    .then(response => {
        dispatch({
            type:ACTION_TYPES.CREATE,
            payload: response.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    calculateProfit(data)
    api.option().update(id, data)
    .then(response => {
        dispatch({
            type:ACTION_TYPES.UPDATE,
            payload: {id,...data}
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}


export const Delete = (id, onSuccess) => dispatch => {

    api.option().delete(id)
    .then(response => {
        dispatch({
            type:ACTION_TYPES.DELETE,
            payload: {id}
        })
        onSuccess()
    })
    .catch(err => console.log(err))
}

export const calculateProfit = (data) => {
    data.profit = (data.averagePrice * 100) - data.commission
}

export const formatAsCurrency = (data) => {
    data.profit = financial(data.profit);
    data.stockPriceAtSale = financial(data.stockPriceAtSale);
    data.averagePrice = financial(data.averagePrice);
    data.commission = financial(data.commission);
}
  
