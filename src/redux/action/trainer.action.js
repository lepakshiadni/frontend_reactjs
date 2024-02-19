import Axios from "axios";
import Cookies from 'js-cookie'
const baseUrl = localStorage.getItem('baseUrl')

const trainerSignUpAction = (details) => {
    console.log(details)
    return async (dispatch) => {
        try {
            await Axios.post(`${baseUrl}/trainer/trainerSignup`, details)
                .then((resp) => {
                    dispatch({
                        type: 'TRAINER_SIGNUP_SUCCESS',
                        payload: resp.data
                    })
                })
        } catch (error) {
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

const trainerBasicInfoUpdate = (details) => {
    const token = Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ', details)
    return async (dispatch) => {
        try {
            Axios.put(`${baseUrl}/trainer/trainerBasicInfoUpdate`, details, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    dispatch({
                        type: 'TRAINERBASICINFO_UPDATED_SUCCESS',
                        payload: resp.data
                    })
                })
        }
        catch (err) {
            dispatch({
                type: "TRAINERBASICINFO_UPDATE_FAILURE",
                payload: err
            })
        }
    }
}

export const trainerSkillsUpdate = (details) => {
    const token = Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ', details)
    return async (dispatch) => {
        try {
            Axios.put(`${baseUrl}/trainer/trainerSkillsUpdate`, details, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    // console.log(resp)
                    dispatch({
                        type: 'TRAINERSKILSSINFO_UPDATED_SUCCESS',
                        payload: resp.data
                    })
                })
        }
        catch (err) {
            dispatch({
                type: "TRAINERSKILSSINFO_UPDATE_FAILURE",
                payload: err
            })
        }
    }
}

export const trainerCertificateUpdate = (details) => {
    const token = Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ', details)
    return async (dispatch) => {
        try {
            Axios.put(`${baseUrl}/trainer/trainerCertificateUpdate`, details, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    // console.log(resp)
                    dispatch({
                        type: 'TRAINERCERTIFICATEINFO_UPDATED_SUCCESS',
                        payload: resp.data
                    })
                })
        }
        catch (err) {
            dispatch({
                type: "TRAINERCERTIFICATEINFO_UPDATE_FAILURE",
                payload: err
            })
        }
    }
}

export const trainerContactInfoUpdate = (details) => {
    const token = Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ', details)
    return async (dispatch) => {
        try {
            Axios.put(`${baseUrl}/trainer/trainerContactInfoUpdate`, details, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    // console.log(resp)
                    dispatch({
                        type: 'TRAINERCONTACTINFO_UPDATED_SUCCESS',
                        payload: resp.data
                    })
                })
        }
        catch (err) {
            dispatch({
                type: "TRAINERCONTACTINFO_UPDATE_FAILURE",
                payload: err
            })
        }
    }
}

export const trainerExperienceInfoUpdate = (details) => {
    const token = Cookies.get('token')
    // console.log(token)
    console.log('trainer details action ', details)
    return async (dispatch) => {
        try {
            Axios.put(`${baseUrl}/trainer/trainerExperienceInfoUpdate`, details, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then((resp) => {
                    // console.log(resp)
                    dispatch({
                        type: 'TRAINEREXPERIENCEINFO_UPDATED_SUCCESS',
                        payload: resp.data
                    })
                })
        }
        catch (err) {
            dispatch({
                type: "TRAINEREXPERIENCEINFO_UPDATE_FAILURE",
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
    addBookMarkePost,
    getBookMarkedPost,
    trainerAppliedTraining,
    gettrainerAppliedTraining,
    trainerBasicInfoUpdate
}