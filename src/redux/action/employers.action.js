import Axios from "axios";
import Cookies from "js-cookie";
const baseUrl = localStorage.getItem("baseUrl");

const employerSignUpAction = (details) => {
  return async (dispatch) => {
    try {
      await Axios.post(`${baseUrl}/employer/employerSignUp`, details)
        .then((resp) => {
          dispatch({
            type: "EMPLOYER_SIGNUP_SUCCESS",
            payload: resp.data,
          });
        })
        .catch((error) => {
          dispatch({
            type: "EMPLOYER_SIGNUP_FAILD",
            payload: error,
          });
        });
    } catch (error) {
      dispatch({
        type: "EMPLOYER_SIGNUP_FAILD",
        payload: error,
      });
    }
  };
};

const employerDetails = () => {
  const token = Cookies.get("token");
  // console.log(token);
  console.log('employerAction')
  return async (dispatch) => {
    try {
      Axios.get(`${baseUrl}/employer/getemployerProfile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        console.log(resp.data)
        dispatch({
          type: "GET_EMPLOYEEDETAILS_FETCHED",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "UNAUTHORIZED",
        payload: err,
      });
    }
  };
};

export const employerBasicInfoUpdate = (details) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", details);
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/employerBasicInfoUpdate`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        dispatch({
          type: "EMPLOYERBASICINFO_UPDATED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "EMPLOYERBASICINFO_UPDATE_FAILURE",
        payload: err,
      });
    }
  };
};

export const employerSkillsUpdate = (details) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", details);
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/employerSkillsUpdate`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "EMPLOYERSKILSSINFO_UPDATED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "EMPLOYERSKILSSINFO_UPDATE_FAILURE",
        payload: err,
      });
    }
  };
};

export const employerContactInfoUpdate = (details) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", details);
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/employerContactInfoUpdate`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "EMPLOYERCONTACTINFO_UPDATED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "EMPLOYERCONTACTINFO_UPDATE_FAILURE",
        payload: err,
      });
    }
  };
};

export const employerExperienceInfoUpdate = (details) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", details);
  return async (dispatch) => {
    try {
      Axios.put(`${baseUrl}/employer/employerExperienceInfoUpdate`, details, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "EMPLOYEREXPERIENCEINFO_UPDATED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "EMPLOYEREXPERIENCEINFO_UPDATE_FAILURE",
        payload: err,
      });
    }
  };
};

export { employerSignUpAction, employerDetails };
