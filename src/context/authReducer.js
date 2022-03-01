export const authReducer = (state, action) => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                errorMessage: action.payload,
                nombre: null,
                status: 'not-authenticated',
            };

        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            };
        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                nombre: action.payload.nombre,
            };
        case 'getCitas':
            return {
                ...state,
                citas: action.payload.citas,
            };
        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',

                nombre: null,
            };
        default:
            return state;
    }
};
