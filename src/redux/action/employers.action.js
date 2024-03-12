import Axios from "axios";
import Cookies from "js-cookie";
const baseUrl = localStorage.getItem("baseUrl");

const employerSignUpAction = (details) => {
  return async (dispatch) => {
    try {
      await Axios.post(`http://35.174.208.29/employer/employerSignUp`, details)
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
  return async (dispatch) => {
    try {
      Axios.get(`http://35.174.208.29/employer/getemployerProfile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp.data)
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
      Axios.put(`http://35.174.208.29/employer/employerBasicInfoUpdate`, details, {
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
      Axios.put(`http://35.174.208.29/employer/employerSkillsUpdate`, details, {
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
      Axios.put(`http://35.174.208.29/employer/employerContactInfoUpdate`, details, {
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
      Axios.put(`http://35.174.208.29/employer/employerExperienceInfoUpdate`, details, {
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

export const deleteEmployerExperience = (_id) => {
  const token = Cookies.get("token");
  // console.log(token)
  console.log("employer details action ", _id);
  return async (dispatch) => {
    try {
      Axios.delete(`http://35.174.208.29/employer/employerExperienceInfoUpdate/${_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "DELETE_EMPLOYER_EXPERIENCE_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (err) {
      dispatch({
        type: "DELETE_EMPLOYER_EXPERIENCE_FAILURE",
        payload: err,
      });
    }
  };
};

export const getSkillsData = () => {
  const token = Cookies.get('token')
  console.log('get SkillsData Action')
  return async (dispatch) => {
    try {
      Axios.get(`http://35.174.208.29/employer/skills `, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((resp) => {

          dispatch({
            type: 'GET_SKILLDATA_SUCCESS',
            payload: resp.data
          })
        })
    }
    catch (err) {
      dispatch({
        type: "GET_SKILLDATA_FAILURE",
        payload: err
      })
    }
  }
}

export const getAppliedTrainingEmployer = () => {
  const token = Cookies.get("token");
  // console.log(token);
  return async (dispatch) => {
    try {
      Axios.get(`http://35.174.208.29/employer/getAppliedTrainingEmployer`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "APPLIEDTRAININGFECTED_SUCCESS",
          payload: resp.data,
        });
      });
    } catch (error) {
      dispatch({
        type: "APPLIEDTRAININGFECTED_FAILURE",
        payload: error,
      });
    }
  };
};

export const getAllAppliedTraining = () => {
  const token = Cookies.get("token");
  // console.log(token);
  return async (dispatch) => {
    try {
      Axios.get(`http://35.174.208.29/employer/getAllAppliedTraining`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "ALLAPPLIEDTRAININGFECTED_SUCCESSS",
          payload: resp.data,
        });
      });
    } catch (error) {
      dispatch({
        type: "ALLAPPLIEDTRAININGFECTED_FAILURE",
        payload: error,
      });
    }
  };
};

export const updateApplicationStatus = (trainingDetailsId, trainerId, status) => {
  const token = Cookies.get("token");
  // console.log(token);
  return async (dispatch) => {
    try {
      Axios.put(`http://35.174.208.29/employer/updateAppliedStatus`, { trainingDetailsId, trainerId, status }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "UPDATEDAPPLIEDSTATUS_SUCCESSS",
          payload: resp.data,
        });
      });
    } catch (error) {
      dispatch({
        type: "UPDATEDAPPLIEDSTATUS_FAILURE",
        payload: error,
      });
    }
  };
}

export const addBookMarkePost = (postId, postDetails) => {
  const token = Cookies.get('token')
  console.log(postId, 'add bookmark post ', postDetails)
  return async (dispatch) => {
    try {
      Axios.post(`http://35.174.208.29/employer/addBookMarkePost/${postId}`, postDetails, {
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

export const getBookMarkedPost = () => {
  const token = Cookies.get('token')
  console.log('get bookMarkepost Action')
  return async (dispatch) => {
    try {
      Axios.get(`http://35.174.208.29/employer/getBookMarkedPostsByUserId `, {
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

export const addFeedback = (feedBack, trainingDetailsId) => {
  const token = Cookies.get('token');
  return async (dispatch) => {
    try {
      Axios.put(`http://35.174.208.29/employer/addFeedback/${trainingDetailsId}`, feedBack, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((resp) => {
        // console.log(resp)
        dispatch({
          type: "ADDFEEDBACK_SUCCESSS",
          payload: resp.data,
        });
      });
    } catch (error) {
      dispatch({
        type: "ADDFEEDBACK_FAILURE",
        payload: error,
      });
    }
  }
}

export const addApplicationRequest = (trainer, trainingDetails) => {
  const token = Cookies.get('token')
  console.log('Add Applicaiton Request   Action')
  return async (dispatch) => {

    Axios.post(`http://35.174.208.29/employer/employerTrainingRequest `, { trainer, trainingDetails }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        // console.log(resp)
        dispatch({
          type: 'ADD_APPLICATIONREQUEST_SUCCESS',
          payload: resp.data
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: "ADD_APPLICATIONREQUEST_FAILURE",
          payload: error?.response?.data
        })
      })

  }
}

export const getAllCandidacy = () => {
  const token = Cookies.get('token')
  console.log('Add Applicaiton Request   Action')
  return async (dispatch) => {

    Axios.get(`http://35.174.208.29/employer/getEmployerApplicationRequest`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        // console.log(resp)
        dispatch({
          type: 'GET_ALLCANDIDACY_SUCCESS',
          payload: resp.data
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: "GET_ALLCANDIDACY_FAILURE",
          payload: error?.response?.data
        })
      })

  }

}



export { employerSignUpAction, employerDetails };
