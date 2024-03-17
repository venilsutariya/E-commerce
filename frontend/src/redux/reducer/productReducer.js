import { GETPRODUCT } from "../types/types";

const defaultState = {
    productArr : []
};

export const productReducer = (state = defaultState , action) => {
    switch(action.type){
        case GETPRODUCT :
            return {
                ...state , productArr : action.resp,
            }
        default : 
            return state;
    }
}