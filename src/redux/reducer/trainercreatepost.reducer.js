//EmployerReducer

const initialState = {
    trainerCreatePostDetails: {

    },
    postTrainingComments: {

    },
    addlikePostTraning: {

    },
    getTrainingComments: {

    },
    postJobDetails: {

    },

    message: '',
    success: null

}

const trainerCreatePostReducer = (state = initialState, action) => {
    switch (action.type) {
        // post trainingRequirement  case
        case 'TRAINERCREATEPOST_SUCCESS':
            console.log("Handling success:", action.payload);
            return {
                ...state,
                trainerCreatePostDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'TRAINERCREATEPOST_FAILURE':
            console.log("Handling failure:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        case 'GET_TRAINERCREATEPOST_SUCCESS':
            console.log("Handling success:", action.payload);
            return {
                ...state,
                trainerCreatePostDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'GET_TRAINERCREATEPOST_FAILURE':
            console.log("Handling failure:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        case 'ADD_POSTTRAININGCOMMENTS_SUCCESS':
            console.log("Handling success:", action.payload);
            return {
                ...state,
                trainerCreatePostDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'ADD_POSTTRAININGCOMMENTS_FAILURE':
            console.log("Handling failure:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        case 'GET_TRAININGCOMMENTS_SUCCESS':
            console.log("Handling success:", action.payload);
            return {
                ...state,
                trainerCreatePostDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'GET_TRAININGCOMMENTS_FAILURE':
            console.log("Handling failure:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        case 'DELETE_COMMENT_SUCCESS':
            console.log("Handling success:", action.payload);
            return {
                ...state,
                trainerCreatePostDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'DELETE_COMMENT_FAILURE':
            console.log("Handling failure:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        case 'ADD_LIKEPOSTTRAINING_SUCCESS':
            console.log("Handling success:", action.payload);
            return {
                ...state,
                trainerCreatePostDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'ADD_LIKEPOSTTRAINING_FAILURE':
            console.log("Handling failure:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };

        default:
            return state;
    }
};




export { trainerCreatePostReducer }