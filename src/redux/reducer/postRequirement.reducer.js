//EmployerReducer

const initialState = {
    postTrainingDetails: {

    },
    postTrainingComments: {

    },
    getTrainingComments:{

    },
    postJobDetails: {

    },

    message: '',
    success: null

}

const postRequirementReducer = (state = initialState, action) => {
    switch (action.type) {
        // post trainingRequirement  case
        case 'POST_TRAININGREQUIREMENT_SUCCESS':
            console.log("Handling success:", action.payload);
            return {
                ...state,
                postTrainingDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'POST_TRAININGREQUIREMENT_FAILURE':
            console.error("Handling failure:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        //geting employer posttraing details
        case 'GET_TRAININGREQUIREMENTS_SUCCESS':
            console.log('handling get post traiing')
            return {
                ...state,
                postTrainingDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'GET_TRAININGREQUIREMENTS_FAILURE':
            console.error("Handling failure employer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        //post employer post job requiement  
        case 'POST_JOBREQUIREMENTS_SUCCESS':
            console.log('handling get postjob')
            return {
                ...state,
                postJobDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'POST_JOBREQUIREMENTS_FAILURE':
            console.error("Handling failure employer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        case 'GET_JOBREQUIREMENTS_SUCCESS':
            console.log('handling get post traiing')
            return {
                ...state,
                postJobDetails: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'GET_JOBREQUIREMENTS_FAILURE':
            console.error("Handling failure employer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
        case 'ADD_POSTTRAININGCOMMENTS_SUCCESS':
            console.log('handling add post traiing comments')
            return {
                ...state,
                postTrainingComments: action.payload,
                message: action.payload.message,
                success: action.payload.success
            };
        case 'ADD_POSTTRAININGCOMMENTS_FAILURE':
            console.error("Handling failure employer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
            case 'GET_TRAININGCOMMENTS_SUCCESS':
                console.log('handling add post traiing comments')
                return {
                    ...state,
                    getTrainingComments: action.payload,
                    message: action.payload.message,
                    success: action.payload.success
                };
            case 'GET_TRAININGCOMMENTS_FAILURE':
                console.error("Handling failure employer:", action.payload);
                return {
                    ...state,
                    message: action.payload.error
                };
        default:
            return state;
    }
};




export { postRequirementReducer }