import Axios from "axios";
import Cookies from 'js-cookie'
const baseUrl = localStorage.getItem('baseUrl')

const employerSignUpAction = (details) => {
    
    return async (dispatch) => {
        try {
            await Axios.post(`${baseUrl}/employer/employerSignUp`, details)
                .then((resp) => {
                    dispatch({
                        type: 'EMPLOYER_SIGNUP_SUCCESS',
                        payload: resp.data
                    });
                })
                .catch((error) => {
                    dispatch({
                        type: 'EMPLOYER_SIGNUP_FAILD',
                        payload: error
                    });
                });
        }
        catch (error) {
            dispatch({
                type: 'EMPLOYER_SIGNUP_FAILD',
                payload: error
            });
        }
    };
}

const employerDetails = () => {
    const token=Cookies.get('token')
    console.log(token)
    return async(dispatch)=>{
        try{
            Axios.get(`${baseUrl}/employer/getemployerProfile`,{
        headers:{
            Authorization:`Bearer ${token}`}
        })
        .then((resp)=>{
            // console.log(resp)
            dispatch({
                type:'GET_EMPLOYEEDETAILS_FETCHED',
                payload:resp.data
            })
        })            
        }
        catch(err){
            dispatch({
                type:"UNAUTHORIZED",
                payload:err
            })
        }
    }
}

const employerProfileUpdate = (userId,details) => {
    const token=Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ')
    return async(dispatch)=>{
        try{
            Axios.put(`${baseUrl}/employer/employerProfileUpdate/${userId}`,details,{
        headers:{
            Authorization:`Bearer ${token}`}
        })
        .then((resp)=>{
            // console.log(resp)
            dispatch({
                type:'EMPLOYERDETAILS_UPDATED_SUCCESS',
                payload:resp.data
            })
        })            
        }
        catch(err){
            dispatch({
                type:"EMPLOYERDETAILS_UPDATE_FAILURE",
                payload:err
            })
        }
    }
}

export {employerSignUpAction,employerDetails,employerProfileUpdate}


