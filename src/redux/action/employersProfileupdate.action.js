import Axios from "axios";
import Cookies from "js-cookie";

export const employerSignUpAction = () => {


    return async (dispatch) => {
        
        try {
            await Axios.post(`http://192.168.1.8:4000/user/updateProfile/${"j"}`, )
                .then((resp) => {
                    dispatch(employerSignUpSuccess(resp.data));
                })
                .catch((error) => {
                    dispatch(employerSignUpFailure(error));
                });
        } catch (error) {
            dispatch(employerSignUpFailure(error));
        }
    };
}


export const employerSignUpSuccess = (data) => ({
    type: 'EMPLOYER_SIGNUP_SUCCESS',
    payload: data,
});

export const employerSignUpFailure = (error) => ({
    type: 'EMPLOYER_SIGNUP_FAILURE',
    payload: { error },
});
