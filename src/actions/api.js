import axios  from "axios";

const baseUrl = "http://localhost:61774/api/"

export default {
    option(url=baseUrl + 'options/'){
        return {
            fetchAll : () => axios.get(url),
            fetchById : id => axios.get(url + id),
            create : newRecord => axios.post(url, newRecord),
            update : (id, updateRecord) => axios.put(url + id, updateRecord),
            delete : (id) => axios.delete(url + id),

        }
    },

    type(url=baseUrl + 'types/'){
        return {
            fetchAll : () => axios.get(url),
        }
    },
    
    share(url=baseUrl + 'shares/'){
        return {
            fetchAll : () => axios.get(url),
            fetchAllCurrentPrices : () => axios.get(url + 'currentPrices')
        }
    }
}