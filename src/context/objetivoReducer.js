

export const objetivoReducer = (state,action) => {
   
    switch (action.type) {

        case 'getObjetivos':
            
            return {
                ...state,
                status:'full',
                objetivos: action.payload
            }
        case 'voidObjetivos':
            
            return {
                    ...state,
                    status:'void',
                    
            }
    
        default:
            return state;
    }
}
