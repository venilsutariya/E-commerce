import { COMPLETEDORDER, GETORDER } from "../types/types"

const defaultState =  {
    orderArr : [],
    completeOrderArr : [],
}

export const orderReducer = (state = defaultState , action) => {
    switch(action.type){
        case GETORDER :
            return {
                ...state , orderArr : action.resp
            };
        case COMPLETEDORDER :
            return {
                ...state , completeOrderArr : action.resp
            }
        default :
            return state
        }
};