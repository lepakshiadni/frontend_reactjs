import Axios from "axios";
const baseUrl=localStorage.getItem('baseUrl')

export const verifyOtp = (phoneNumber, otp) => {
  return async (dispatch) => {
    try {
      const response = await Axios.post(`${baseUrl}/user/verifyotp`, { phoneNumber, otp });
      // console.log(response)
      dispatch(verifyOtpSuccess(response.data));
    } catch (error) {
      dispatch(verifyOtpFailure('Error verifying OTP'));
    }
  };
};

export const verifyOtpSuccess = (data) => ({
  type: 'VERIFY_OTP_SUCCESS',
  payload: data,
});

export const verifyOtpFailure = (error) => ({
  type: 'VERIFY_OTP_FAILURE',
  payload: { error },
});