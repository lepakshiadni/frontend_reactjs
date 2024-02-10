
//TrainerReducer

const initialState = {
    trainerDetails:{
    },

    addBookMarkedPost:{

    },
    message:'',
    success:null

}

const trainerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TRAINER_SIGNUP_SUCCESS':
            return { ...state,
                trainerDetails : action.payload,
                message : action.payload.message,
                success : action.payload.success
            };
        case 'TRAINER_SIGNUP_FAILURE':
            return { ...state,
                message : action.payload.error
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
            console.error("Handling failure trainer:", action.payload);
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
            console.error("Handling failure trainer:", action.payload);
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
            console.error("Handling failure trainer:", action.payload);
            return {
                ...state,
                message: action.payload.error
            };
            case 'GET_BOOKMARKEDPOST_SUCCESS':
                console.log('handling get trainer book marked')
                return {
                    ...state,
                    addBookMarkedPost: action.payload,
                    message: action.payload.message,
                    success: action.payload.success
                };
            case 'GET_BOOKMARKEDPOSTFAILURE':
                console.error("Handling failure trainer:", action.payload);
                return {
                    ...state,
                    message: action.payload.error
                };
        default:
            return state;
    }
};

export  {trainerReducer}