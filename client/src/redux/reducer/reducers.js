import { GET_CLIENTS, GET_ALL_ROOMS } from "../actions/names";

const initialState = {
    rooms: [], 
    clients: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_ROOMS:
            return{
                ...state,
                rooms: action.payload
            };
        case GET_CLIENTS:
            return{
                ...state,
                clients: action.payload
            };
        default: 
        return state 
    }

}

export default rootReducer