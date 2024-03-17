import { GETCART } from "../types/types";

const defaultState = {
    cartArr : [],
}

export const cartReducer = (state = defaultState , action) => {
    switch(action.type){
        case GETCART : 
            return {
                ...state , cartArr : action.resp
            }            
        default : 
            return state
    }
}