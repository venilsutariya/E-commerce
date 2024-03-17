import { GETUSER } from "../types/types";

const defaultState = {
    findedUser : {},
}

export const userReducer = (state = defaultState , action) => {


    switch(action.type){
        case GETUSER :
            state.findedUser = action.findedUser;
            localStorage.setItem('user' , JSON.stringify(action.findedUser));
            return {...state}

        default : 
                return state
    }
}