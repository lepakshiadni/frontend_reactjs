import Axios from "axios";
import BaseAxiosUrl from "../../components/utils/LocalIp";

const ip =localStorage.getItem('ipaddress');
const localIp=JSON.parse(ip)
export const employerSignUpAction = () => {


    return async (dispatch) => {
        
        try {
            await Axios.post(`http://${ip}:4000/user/updateProfile/${"j"}`, )
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
