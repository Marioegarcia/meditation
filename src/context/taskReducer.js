export const taskReducer = (state, action) => {
    switch (action.type) {
        case 'getTask':
            return {
                ...state,
                status: 'full',
                noToDo: action.payload,
            };
        case 'voidTask':
            return {
                ...state,
                status: 'void',
            };
        case 'Delete':
            return {
                ...state,
                noToDo:[],
                status: 'void',
            };
        default:
            return state;
    }
};
