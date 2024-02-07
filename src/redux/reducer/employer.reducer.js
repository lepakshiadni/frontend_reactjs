//EmployerReducer

const initialState = {
    employerDetails: {

    },
    message: '',
    success: null

}

const employerReducer = (state = initialState, action) => {
    switch (action.type) {
        // sigup case
        case 'EMPLOYER_SIGNUP_SUCCESS':
            console.log("Handling success:", action.payload);
            return {
                ...state,
                employerDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'EMPLOYER_SIGNUP_FAILURE':
            console.error("Handling failure:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        //geting employer details after signup
        case 'GET_EMPLOYEEDETAILS_FETCHED':
            console.log('handling get employer')
            return {
                ...state,
                employerDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'UNAUTHORIZED':
            console.error("Handling failure employer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        //updating the trainerProfile 
        case 'EMPLOYERDETAILS_UPDATED_SUCCESS':
            console.log('handling get employer')
            return {
                ...state,
                trainerDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'EMPLOYERDETAILS_UPDATE_FAILURE':
            console.error("Handling failure employer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        default:
            return state;
    }
};




export { employerReducer }