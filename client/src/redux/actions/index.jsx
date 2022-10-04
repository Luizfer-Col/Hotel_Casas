import axios from "axios";
import { CREATE_CLIENT, GET_CLIENTS } from "./names";

export function getClients() {
  return async function (dispatch) {
    const clientsJson = await axios.get("http://localhost:3000/clients");
    console.log(clientsJson);
    return dispatch({
      type: GET_CLIENTS,
      payload: clientsJson.data,
    });
  };
}

export function createClient(payload) {
  return async function (dispatch) {
    const newClient = await axios.post("http://localhost:3000/clients", payload);
    return dispatch({
        type: CREATE_CLIENT,
        payload
    })
  };
}