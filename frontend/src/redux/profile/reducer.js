import { login, logout } from "./type";
let token = JSON.parse(localStorage.getItem('tummoc-token'))|| '';
let user = JSON.parse(localStorage.getItem('tummoc-user'))|| {};
const initState = {
    user ,
    token
};

export const authReducer = (state = initState, {type, payload}) => {
    switch(type){
        case login: {
            return {
                ...state ,
                token : payload.token ,
                user : payload.user
            }
        } 
        case logout:{
             return {
                ...state,
                 token :'',
                 user : {}
             }
            }
        default: return state;
    }
}