import Axios from "axios";
import Cookies from 'js-cookie'
const baseUrl = localStorage.getItem('baseUrl')

const trainerSignUpAction = (details) => {
    console.log(details)
    return async (dispatch) => {
        try {
            await Axios.post(`${baseUrl}/trainer/trainerSignup`, details)
                .then((resp) => {
                    // dispatch(employerSignUpSuccess(resp.data));
                    dispatch({
                        type: 'TRAINER_SIGNUP_SUCCESS',
                        payload: resp.data
                    })
                })
        } catch (error) {
            // dispatch(employerSignUpFailure(error));
            dispatch({
                type: 'TRAINER_SIGNUP_FAILURE',
                payload: { error }
            })
        }
    };
}

const trainerDetails = () => {
    const token=Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ')
    return async(dispatch)=>{
        try{
            Axios.get(`${baseUrl}/trainer/gettrainerProfile`,{
        headers:{
            Authorization:`Bearer ${token}`}
        })
        .then((resp)=>{
            // console.log(resp)
            dispatch({
                type:'GET_TRAINERDETAILS_FETCHED',
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
const trainerProfileUpdate = (userId,details) => {
    const token=Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ')
    return async(dispatch)=>{
        try{
            Axios.put(`${baseUrl}/trainer/trainerProfileUpdate/${userId}`,details,{
        headers:{
            Authorization:`Bearer ${token}`}
        })
        .then((resp)=>{
            // console.log(resp)
            dispatch({
                type:'TRAINERDETAILS_UPDATED_SUCCESS',
                payload:resp.data
            })
        })            
        }
        catch(err){
            dispatch({
                type:"TRAINERDETAILS_UPDATE_FAILURE",
                payload:err
            })
        }
    }
}

export { trainerSignUpAction, trainerDetails,trainerProfileUpdate }