import Axios from 'axios'
import Cookies from 'js-cookie'
const baseUrl = localStorage.getItem('baseUrl')


export const trainerCreatePost = (postDetails) => {
    // console.log(postTrainingDetails)
    const token = Cookies.get('token')
    console.log(token);
    return async (dispatch) => {
        await Axios.post(`${baseUrl}/trainerpost/trainerCreatePost`, postDetails,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            .then((resp) => {
                dispatch({
                    type: 'TRAINERCREATEPOST_SUCCESS',
                    payload: resp.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "TRAINERCREATEPOST_FAILURE",
                    payload: error
                })
            })
    }
}