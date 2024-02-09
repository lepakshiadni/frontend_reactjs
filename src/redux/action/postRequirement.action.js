import Axios from 'axios'
const baseUrl = localStorage.getItem('baseUrl')


export const postTrainingRequirementAction = (postTrainingDetails) => {
    console.log(postTrainingDetails)

    return async (dispatch) => {
        await Axios.post(`${baseUrl}/employerpost/postTrainingRequirement`, postTrainingDetails)
            .then((resp) => {
                dispatch({
                    type: 'POST_TRAININGREQUIREMENT_SUCCESS',
                    payload: resp.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "POST_TRAININGREQUIREMENT_FAILURE",
                    payload: error
                })
            })
    }
}

export const getPostTrainingRequirementAction = () => {
    return async (dispatch) => {
        await Axios.get(`${baseUrl}/employerpost/getpostTrainingRequirement`)
            .then((resp) => {
                dispatch({
                    type: 'GET_TRAININGREQUIREMENTS_SUCCESS',
                    payload: resp.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "GET_TRAININGREQUIREMENTS_FAILURE",
                    payload: error
                })
            })
    }
}

export const addPostTrainingComments = (postId,comment) => {
    // console.log('add post traiingcomments',comment)
    return async (dispatch) => {
        await Axios.put(`${baseUrl}/employerpost/postTrainingRequirementComments/${postId}`,{comment: comment})
            .then((resp) => {
                dispatch({
                    type: 'ADD_POSTTRAININGCOMMENTS_SUCCESS',
                    payload: resp.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "ADD_POSTTRAININGCOMMENTS_FAILURE",
                    payload: error
                })
            })
    }
}

export const getPostTrainingComments = (postId) => {
    return async (dispatch) => {
        await Axios.get(`${baseUrl}/employerpost/getTrainingRequirementComments/${postId}`)
            .then((resp) => {
                dispatch({
                    type: 'GET_TRAININGCOMMENTS_SUCCESS',
                    payload: resp.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "GET_TRAININGCOMMENTS_FAILURE",
                    payload: error
                })
            })
    }
}
export const postJobRequirementAction = (postJobDetails) => {

    return async (dispatch) => {
        await Axios.post(`${baseUrl}/employerpost/postJobRequirement`, postJobDetails)
            .then((resp) => {
                dispatch({
                    type: 'POST_JOBREQUIREMENTS_SUCCESS',
                    payload: resp.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "POST_JOBREQUIREMENTS_FAILURE",
                    payload: error
                })
            })
    }
}

export const getJobRequirementAction = () => {

    return async (dispatch) => {
        await Axios.get(`${baseUrl}/employerpost/postJobRequirement`)
            .then((resp) => {
                dispatch({
                    type: 'GET_JOBREQUIREMENTS_SUCCESS',
                    payload: resp.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "GET_JOBREQUIREMENTS_FAILURE",
                    payload: error
                })
            })
    }
}

