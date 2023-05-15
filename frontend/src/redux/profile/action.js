import { login, logout } from "./type"
import axios from 'axios';
const host = 'https://long-rose-hippo-fez.cyclic.app';
export const signinAPI = (data) => async (dispatch) => {
   
    try {
        let res = await axios.post(`${host}/user/login`, data);
        let ans = await res.data;
        localStorage.setItem("tummoc-token", JSON.stringify(ans.token));
        localStorage.setItem("tummoc-user", JSON.stringify(ans.user));
        dispatch({ type: login, payload : {token : ans.token , user : ans.user}});
        return ans
    }
    catch (e) {
        return e
    }
}

export const signupAPI = (data) => async (dispatch) => {
    try {
        let res = await axios.post(`${host}/user/register`, data , {
            headers: {
                'Content-Type':'Application/json'
            }
        });
        let ans = await res.data;
        return ans
    }
    catch (e) {
        return e
    }
}
export const logoutAPI =()=> async(dispatch) => {
    let res = await axios.get(`${host}/google/logout`);
    let ans = await res.data;
    localStorage.removeItem('tummoc-token')
    localStorage.removeItem('tummoc-user')
    window.location.href = '/'
    alert(ans.message)
    dispatch({type:logout})
}
