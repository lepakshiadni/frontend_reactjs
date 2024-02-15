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
    const token = Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ')
    return async (dispatch) => {
        try {
            Axios.get(`${baseUrl}/trainer/gettrainerProfile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    // console.log(resp)
                    dispatch({
                        type: 'GET_TRAINERDETAILS_FETCHED',
                        payload: resp.data
                    })
                })
        }
        catch (err) {
            dispatch({
                type: "UNAUTHORIZED",
                payload: err
            })
        }
    }
}
const trainerProfileUpdate = (details) => {
    const token = Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ',details)
    return async (dispatch) => {
        try {
            Axios.put(`${baseUrl}/trainer/trainerProfileUpdate`, details, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    // console.log(resp)
                    dispatch({
                        type: 'TRAINERDETAILS_UPDATED_SUCCESS',
                        payload: resp.data
                    })
                })
        }
        catch (err) {
            dispatch({
                type: "TRAINERDETAILS_UPDATE_FAILURE",
                payload: err
            })
        }
    }
}

const addBookMarkePost = (postId, postDetails) => {
    const token = Cookies.get('token')
    console.log(postId, 'add bookmark post ', postDetails)
    return async (dispatch) => {
        try {
            Axios.post(`${baseUrl}/trainer/addBookMarkePost/${postId}`, postDetails, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    // console.log(resp)
                    dispatch({
                        type: 'ADD_BOOKMARKEDPOST_SUCCESS',
                        payload: resp.data
                    })
                })
        }
        catch (resp) {
            dispatch({
                type: "ADD_BOOKMARKEDPOSTFAILURE",
                payload: resp.data
            })
        }
    }

}

const getBookMarkedPost = () => {
    const token = Cookies.get('token')
    console.log('get bookMarkepost Action')
    return async (dispatch) => {
        try {
            Axios.get(`${baseUrl}/trainer/getBookMarkedPostsByUserId `, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    // console.log(resp)
                    dispatch({
                        type: 'GET_BOOKMARKEDPOST_SUCCESS',
                        payload: resp.data
                    })
                })
        }
        catch (err) {
            dispatch({
                type: "GET_BOOKMARKEDPOST_FAILURE",
                payload: err
            })
        }
    }

}
const trainerAppliedTraining = (trainingPostId, trainingDetails) => {
    const token = Cookies.get('token')
    console.log('POST trainerApplied  Action')
    return async (dispatch) => {

        Axios.post(`${baseUrl}/trainer/trainerAppliedTraining/${trainingPostId} `, trainingDetails, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((resp) => {
                // console.log(resp)
                dispatch({
                    type: 'POST_TRAINERAPPLIEDTRAINING_SUCCESS',
                    payload: resp.data
                })
            })
            .catch((error) => {
                console.log(error)
                dispatch({
                    type: "POST_TRAINERAPPLIEDTRAINING_FAILURE",
                    payload: error?.response?.data
                })
            })

    }

}

const gettrainerAppliedTraining = () => {
    const token = Cookies.get('token')
    console.log('get getAppliedTraining Action')
    return async (dispatch) => {
        try {
            Axios.get(`${baseUrl}/trainer/getAppliedTraining `, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    // console.log(resp)
                    dispatch({
                        type: 'GET_APPLIEDTRAINING_SUCCESS',
                        payload: resp.data
                    })
                })
        }
        catch (err) {
            dispatch({
                type: "GET_APPLIEDTRAINING_FAILURE",
                payload: err
            })
        }
    }

}



export {
    trainerSignUpAction,
    trainerDetails,
    trainerProfileUpdate,
    addBookMarkePost,
    getBookMarkedPost,
    trainerAppliedTraining,
    gettrainerAppliedTraining
}