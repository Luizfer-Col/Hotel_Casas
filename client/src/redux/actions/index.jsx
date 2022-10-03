import axios from 'axios'
import { GET_CLIENTS } from './names';

export function getClients(){
    return async function(dispatch){
        const clientsJson = await axios.get("http://localhost:3000/clients");
        console.log(clientsJson);
        return dispatch({
            type: GET_CLIENTS,
            payload: clientsJson.data
        })
    }
}