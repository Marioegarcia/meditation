export const ruedaReducer = (state,action) => {
   
    switch (action.type) {

        case 'getRueda':
            return {
                ...state,
                status:'full',
                ruedas: action.payload
            }
        case 'voidRueda':
            
            return {
                    ...state,
                    status:'void',
                    
            }
        case 'Delete':
            
            return {
                ...state,
                ruedas:[],
                status:'void',
                        
            }    
        default:
            return state;
    }
}