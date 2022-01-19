

export const taskReducer = (state,action) => {
   
    switch (action.type) {

        case 'getTask':
            
            return {
                ...state,
                status:'full',
                noToDo: action.payload
            }
        case 'voidTask':
            
            return {
                    ...state,
                    status:'void',
                    
            }
    
        default:
            return state;
    }
}
