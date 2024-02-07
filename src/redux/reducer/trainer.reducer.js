
//TrainerReducer

const initialState = {
    trainerDetails:{
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
        default:
            return state;
    }
};

export  {trainerReducer}