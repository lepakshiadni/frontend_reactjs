//TrainerReducer

const initialState = {
  employerDetails: {},
  addBookMarkedPost: {},
  message: "",
  success: null,
};

const employerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EMPLOYER_SIGNUP_SUCCESS":
      return {
        ...state,
        employerDetails: action.payload,
        message: action.payload.message,
        success: action.payload.success,
      };
    case "EMPLOYER_SIGNUP_FAILURE":
      return {
        ...state,
        message: action.payload.error,
      };

    //geting trainer details after signup
    case "GET_EMPLOYERDETAILS_FETCHED":
      console.log("handling get employer");
      // toast.success(action.payload.message)
      return {
        ...state,
        employerDetails: action.payload,
        message: action.payload.message,
        success: action.payload.success,
      };
    case "UNAUTHORIZED":
      console.log("Handling failure employer:", action.payload);
      return {
        ...state,
        message: action.payload.error,
      };
    //updating the trainerProfile
    case "EMPLOYERBASICINFO_UPDATED_SUCCESS":
      console.log("handling get employer");
      return {
        ...state,
        employerDetails: action.payload,
        message: action.payload.message,
        success: action.payload.success,
      };
    case "EMPLOYERBASICINFO_UPDATE_FAILURE":
      console.log("Handling failure employer:", action.payload);
      return {
        ...state,
        message: action.payload.error,
      };
    case "EMPLOYERSKILSSINFO_UPDATED_SUCCESS":
      console.log("handling get employer");
      return {
        ...state,
        employerDetails: action.payload,
        message: action.payload.message,
        success: action.payload.success,
      };
    case "EMPLOYERSKILSSINFO_UPDATE_FAILURE":
      console.log("Handling failure employer:", action.payload);
      return {
        ...state,
        message: action.payload.error,
      };
    case "EMPLOYERCONTACTINFO_UPDATED_SUCCESS":
      console.log("handling get employer");
      return {
        ...state,
        employerDetails: action.payload,
        message: action.payload.message,
        success: action.payload.success,
      };
    case "EMPLOYERCONTACTINFO_UPDATE_FAILURE":
      console.log("Handling failure employer:", action.payload);
      return {
        ...state,
        message: action.payload.error,
      };
    case "EMPLOYEREXPERIENCEINFO_UPDATED_SUCCESS":
      console.log("handling get employer");
      return {
        ...state,
        trainerDetails: action.payload,
        message: action.payload.message,
        success: action.payload.success,
      };
    case "EMPLOYEREXPERIENCEINFO_UPDATE_FAILURE":
      console.log("Handling failure employer:", action.payload);
      return {
        ...state,
        message: action.payload.error,
      };
    //add to the bookmark the trainerProfile
    case "ADD_BOOKMARKEDPOST_SUCCESS":
      console.log("handling get employer");
      return {
        ...state,
        addBookMarkedPost: action.payload,
        message: action.payload.message,
        success: action.payload.success,
      };
    case "ADD_BOOKMARKEDPOSTFAILURE":
      console.log("Handling failure employer:", action.payload);
      return {
        ...state,
        message: action.payload.error,
      };
    case "GET_BOOKMARKEDPOST_SUCCESS":
      console.log("handling get employer book marked", action.payload);
      return {
        ...state,
        addBookMarkedPost: action.payload,
        message: action.payload.message,
        success: action.payload.success,
      };
    case "GET_BOOKMARKEDPOST_FAILURE":
      console.log("Handling failure trainer:", action.payload);
      return {
        ...state,
        message: action.payload.error,
      };

    default:
      return state;
  }
};

export { employerReducer };
