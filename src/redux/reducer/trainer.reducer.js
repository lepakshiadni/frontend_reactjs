
//TrainerReducer

const initialState = {
    trainerDetails: {
    },
    addBookMarkedPost: {

    },
    trainerAppliedTraining: {

    },
    gettrainerAppliedTraining:{

    },
    message: '',
    success: null

}

const trainerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TRAINER_SIGNUP_SUCCESS':
            return {
                ...state,
                trainerDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'TRAINER_SIGNUP_FAILURE':
            return {
                ...state,
                message: action.payload.error
            };

        //geting trainer details after signup
        case 'GET_TRAINERDETAILS_FETCHED':
            console.log('handling get trainer')
            return {
                ...state,
                trainerDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'UNAUTHORIZED':
            console.log("Handling failure trainer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        //updating the trainerProfile 
        case 'TRAINERDETAILS_UPDATED_SUCCESS':
            console.log('handling get trainer')
            return {
                ...state,
                trainerDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'TRAINERDETAILS_UPDATE_FAILURE':
            console.log("Handling failure trainer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        //add to the bookmark the trainerProfile 
        case 'ADD_BOOKMARKEDPOST_SUCCESS':
            console.log('handling get trainer')
            return {
                ...state,
                addBookMarkedPost: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'ADD_BOOKMARKEDPOSTFAILURE':
            console.log("Handling failure trainer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        case 'GET_BOOKMARKEDPOST_SUCCESS':
            console.log('handling get trainer book marked', action.payload)
            return {
                ...state,
                addBookMarkedPost: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'GET_BOOKMARKEDPOST_FAILURE':
            console.log("Handling failure trainer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        case 'POST_TRAINERAPPLIEDTRAINING_SUCCESS':
            console.log('handling post trainer applied trainer', action.payload)
            return {
                ...state,
                trainerAppliedTraining: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'POST_TRAINERAPPLIEDTRAINING_FAILURE':
            console.log("Handling failure trainer:", action.payload);
            return {
                ...state,
                message: action.payload,
                success: action.payload
            };
        case 'GET_APPLIEDTRAINING_SUCCESS':
            console.log('handling get trainer APPLIED TRAINING', action.payload)
            return {
                ...state,
                gettrainerAppliedTraining: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'GET_APPLIEDTRAINING_FAILURE':
            console.log("Handling failure trainer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        default:
            return state;
    }
};

export { trainerReducer }